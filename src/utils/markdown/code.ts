/*
 * @Date: 2022-01-11 10:55:51
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/utils/markdown/code.ts
 */
/**
 * @description: 对markdown中的代码部分进行操作
 * @param {*}
 * @return {*}
 */
export const language = (element) => {
  const pre = Array.from(element.getElementsByTagName('pre'));
  pre.forEach((item:any, index) => {
    let codeType = item.children[0].classList[0].split('-')[1].toUpperCase();
    if(codeType==='HTML') codeType = 'VUE'
    const html = `<figcaption class="line-numbers-head">
              <div class="custom-carbon">
                <div class="custom-carbon-dot custom-carbon-dot--red"></div>
                <div class="custom-carbon-dot custom-carbon-dot--yellow"></div>
                <div class="custom-carbon-dot custom-carbon-dot--green"></div>
              </div>
              <div class="language">${codeType}</div>
              <a class="copy" onclick="copy(${index})" title="点击复制">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fuzhi"></use>
                </svg>
              </a>
            </figcaption>`;
    item.insertAdjacentHTML('beforebegin', html);
    item.classList.add('line-numbers');
  });
};
export const copy = (index) => {
  let code:any = Array.from(document.querySelectorAll('pre code'));
  const ele = document.createElement('div');
  ele.innerHTML = code[index].innerHTML;
  let copyStr = '';
  Array.from(ele.innerText).forEach((item) => {
    copyStr += item;
  });
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = copyStr;
  textarea.select();
  document.execCommand('Copy'); // 执行浏览器复制命令
  document.body.removeChild(textarea);
  alert('已复制');
};
