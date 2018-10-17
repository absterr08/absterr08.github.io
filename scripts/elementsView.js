function inView(el) {
  const windowTop = window.scrollY;
  const windowBottom = windowTop + window.innerHeight;
  const elTop = el.offsetTop;
  const elBottom = elTop + el.offsetHeight;
  return  (!above(elBottom, windowTop) && !below(elTop, windowBottom));

}

function above(elBottom, windowTop) {
  return elBottom <= windowTop
}

function below(elTop, windowBottom) {
  return elTop >= windowBottom
}

function scrollIfInView(el) {
  if (inView(el)) {
    console.log('in view');
    el.scrollIntoView({ behavior: 'smooth' });
    window.removeEventListener('scroll', scrollEvent);
    // el.scrollIntoView();
  }
}

export const scrollEvent = (e) => {
  // console.log('why');
  e.stopPropagation();
  scrollIfInView(cares);
};


export const testy = () => {
  console.log('real nice!');
};
