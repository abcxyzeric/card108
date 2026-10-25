/*! Đêm Giữa Hạ (Midsommar) Frontend - Việt hóa bởi card108 */
document.head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400&display=swap\">");
document.body.insertAdjacentHTML("afterbegin", "<div id=\"choices\">\n<button class=\"hd\" id=\"hd\"><span>Tiếp theo</span><svg viewBox=\"0 0 12 12\" width=\"12\" height=\"12\"><path d=\"M2 4.5l4 4 4-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></button>\n<div id=\"list\"></div>\n</div>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nhtml,body{overflow:hidden}\nbody{padding-bottom:10px;font-family:'Be Vietnam Pro','Noto Serif',serif;font-size:14px;line-height:1.7;color:#27302A;background:transparent}\n#choices{background:#FBFAF6;border:1px solid #E2DFD3;border-radius:12px;overflow:hidden}\n.hd{display:block;position:relative;width:100%;padding:10px 16px 10px 28px;border:0;border-bottom:1px solid #E2DFD3;background:#F2F1EA;font:inherit;font-weight:700;text-align:left;color:inherit;cursor:pointer}\n.hd svg{position:absolute;right:14px;top:50%;margin-top:-6px;color:#6B7166;transition:transform .2s}\n#choices.closed .hd{border-bottom:0}\n#choices.closed .hd svg{transform:rotate(-90deg)}\n#choices.closed #list{display:none}\n.hd span{position:relative}\n.hd span::after{content:\"\";position:absolute;left:-8px;right:-8px;bottom:-10px;height:3px;border-radius:3px 3px 0 0;background:#5E7E44}\n#list{padding:2px 12px 12px}\n.opt{display:grid;grid-template-columns:5.5em 1fr;gap:10px;width:100%;margin-top:8px;padding:9px 12px;border:0;border-left:3px solid var(--c);border-radius:0 8px 8px 0;background:#FFFFFF;font:inherit;text-align:left;color:inherit;cursor:pointer;transition:background .15s}\n.opt .n{font-weight:700;color:var(--c)}\n.opt:hover{background:color-mix(in srgb,var(--c) 10%,#FFFFFF)}\n.opt.on{background:color-mix(in srgb,var(--c) 18%,#FFFFFF)}\n@media (max-width:520px){.hd{padding-left:24px}#list{padding:2px 8px 10px}.opt{font-size:13px;line-height:1.75}}\n</style>");
// Tùy chọn được truyền vào qua regex, là bốn phần tử choice trong body; đổi thành nút bấm, nhấn vào một mục sẽ điền vào khung nhập liệu của SillyTavern
const COLORS = ['#E8B923', '#D8452F', '#E48AA3', '#27407A'];
const NUM = ['Tùy chọn 1', 'Tùy chọn 2', 'Tùy chọn 3', 'Tùy chọn 4'];
const list = document.getElementById('list');
// Chỉ hiển thị ở phản hồi mới nhất: SillyTavern không tính lại độ sâu regex của các phản hồi cũ, phản hồi ẩn không bị giới hạn độ sâu, nên tự ẩn toàn bộ iframe, đánh giá lại khi có thêm/bớt phản hồi
const floor = getCurrentMessageId();
const only = () => { frameElement.style.display = floor === getLastMessageId() ? '' : 'none'; };
only();
[tavern_events.CHARACTER_MESSAGE_RENDERED, tavern_events.USER_MESSAGE_RENDERED, tavern_events.MESSAGE_DELETED].forEach((e) => eventOn(e, only));
document.querySelectorAll('choice').forEach((x, i) => {
  const b = list.appendChild(document.createElement('button'));
  b.className = 'opt';
  b.style.setProperty('--c', COLORS[i]);
  b.innerHTML = '<span class="n">' + NUM[i] + '</span><span></span>';
  b.lastChild.textContent = x.textContent.trim();
  x.remove();
});
document.getElementById('hd').addEventListener('click', () => document.getElementById('choices').classList.toggle('closed'));
list.addEventListener('click', (e) => {
  const b = e.target.closest('.opt');
  if (!b) return;
  list.querySelectorAll('.opt').forEach((x) => x.classList.toggle('on', x === b));
  const box = window.parent.document.getElementById('send_textarea');
  box.value = b.lastChild.textContent;
  box.dispatchEvent(new Event('input', { bubbles: true }));
  box.focus();
});
