const output = document.querySelector("output");
const body = document.querySelector("body");
const numColors = 8;
const numTiming = 5;
const numTops = 3;
let amount = 0;

function createBubble(time, text) {
  const left = Math.floor(Math.random() * 65);
  const aside = document.createElement("aside");
  aside.style.left = `${left + 5}vw`;
  aside.className = `color${Math.floor(Math.random() * numColors)} time${Math.floor(Math.random() * numTiming)} top${Math.floor(Math.random() * numTops)}`;
  aside.innerHTML = `<b>${time} seconds</b>:<br>${text}`;
  body.append(aside);
}

const bubbles = [
  { time: 4, text: "不仅仅是最低工资工人。。。一年之内" },
  { time: 9, text: "超过亚马逊最低工资的员工。。。一年之内" },
  { time: 13, text: "超过美国年薪的中位数" },
  { time: 18, text: "超过美国的平均年薪" },
  { time: 23, text: "比他自己的年薪还高！" },
  { time: 28, text: "足够不符合covid-19刺激检查" },
  { time: 32, text: "超过高级软件开发人员的平均年薪" },
  { time: 38, text: "足够买一个基本的阿斯顿马丁" },
  { time: 48, text: "比一个美国参议员一年赚的还多" },
  { time: 55, text: "足够买一辆满载的特斯拉S型车" },
  /*{ time: 70, text: "enough to raise a child from birth to age 17" },
  { time: 80, text: "enough to buy a house for the median price in the USA" },
  { time: 89, text: "more than the yearly salary of 99% of the US population" },
  { time: 111, text: "more than what the US President makes in a year" },*/
  { time: 277, text: "足以支付有史以来最昂贵的钓鱼诱惑" }
]

bubbles.forEach(function (el) {
  setTimeout(`createBubble(${el.time}, "${el.text}")`, el.time * 1000);
});