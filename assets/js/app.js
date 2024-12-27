'use strict';

import {listen, select, style, selectAll} from './data/utility.js';

// about me section
const aboutMeSection = select('.about-me .container');

// skill section
const skillSection = select('.skills .container');
const htmlBar = select('.html-bar');
const cssBar = select('.css-bar');
const jsBar = select('.js-bar');
const javaBar = select('.java-bar');

// project sections
const porjectTitle = select('.projects h2');
const projectList = selectAll('.project-content');

//contact section
const contactMeSection = select('.contact-me .container');

// target positions
let skillPos = getRectTop(skillSection);
let aboutMePos = getRectTop(aboutMeSection);
let projectTitlePos = getRectTop(porjectTitle);
let contactPos = getRectTop(contactMeSection);
const projectPos = [];


projectList.forEach(project => {
  let position = getRectTop(project);
  projectPos.push(position);
}); 

listen(window, 'scroll', () => {
  let position = window.scrollY;
  
  if (position > skillPos) animateSkill();
  if (position > aboutMePos) sectionAppear(aboutMeSection);
  if (position > projectTitlePos) sectionAppear(porjectTitle);
  if (position > contactPos) sectionAppear(contactMeSection);

  projectList.forEach((project, index) => {
    console.log(`${position} > ${projectPos[index]}`);
    if (position > projectPos[index]) sectionAppear(project);
  });  

});

function animateAboutMe() {
  sectionAppear(aboutMeSection);
}

function animateSkill() {
  sectionAppear(skillSection);
  style(htmlBar, 'width', '80%');
  style(cssBar, 'width', '90%');
  style(jsBar, 'width', '85%');
  style(javaBar, 'width', '70%');
}

function sectionAppear(selector) {
  style(selector, 'opacity', '1');
  style(selector, 'bottom', '0');
}

function getRectTop(selector) {
  return selector.getBoundingClientRect().top - window.innerHeight;
}