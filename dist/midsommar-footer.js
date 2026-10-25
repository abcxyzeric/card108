/*! Đêm Giữa Hạ (Midsommar) Frontend - Việt hóa bởi card108. All rights reserved. */
document.head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400&display=swap\">");
document.body.insertAdjacentHTML("afterbegin", "<div id=\"bar\">\n<nav class=\"tabs\"><button data-p=\"sched\" class=\"on\">Lịch trình đại tiệc</button><button data-p=\"map\">Bản đồ Hårga</button><button data-p=\"girls\">Câu chuyện của họ</button></nav>\n<section class=\"pg on\" id=\"sched\"></section>\n<section class=\"pg\" id=\"map\"><div class=\"frame wide\"><svg class='map' viewBox='0 0 1000 660' preserveAspectRatio='xMidYMid slice' xmlns='http://www.w3.org/2000/svg'><image href='https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/map-village.webp' width='1000' height='660'/><g class='loc' data-loc='Đền thờ màu vàng'><circle class='hit' cx='520' cy='92' r='34'/><g class='mk'><circle class='dot' cx='520' cy='92' r='5'/><text x='520' y='122'>Đền thờ màu vàng</text></g></g><g class='loc' data-loc='Cây Tổ Tiên'><circle class='hit' cx='725' cy='142' r='34'/><g class='mk'><circle class='dot' cx='725' cy='142' r='5'/><text x='725' y='172'>Cây Tổ Tiên</text></g></g><g class='loc' data-loc='Vách đá'><circle class='hit' cx='135' cy='106' r='34'/><g class='mk'><circle class='dot' cx='135' cy='106' r='5'/><text x='135' y='136'>Vách đá</text></g></g><g class='loc' data-loc='Nhà bếp'><circle class='hit' cx='530' cy='188' r='34'/><g class='mk'><circle class='dot' cx='530' cy='188' r='5'/><text x='530' y='218'>Nhà bếp</text></g></g><g class='loc' data-loc='Nhà chính'><circle class='hit' cx='462' cy='238' r='34'/><g class='mk'><circle class='dot' cx='462' cy='238' r='5'/><text x='462' y='268'>Nhà chính</text></g></g><g class='loc' data-loc='Ký túc xá thanh niên'><circle class='hit' cx='310' cy='250' r='34'/><g class='mk'><circle class='dot' cx='310' cy='250' r='5'/><text x='310' y='280'>Ký túc xá</text></g></g><g class='loc' data-loc='Vườn rau'><circle class='hit' cx='395' cy='282' r='34'/><g class='mk'><circle class='dot' cx='395' cy='282' r='5'/><text x='395' y='312'>Vườn rau</text></g></g><g class='loc' data-loc='Bãi cỏ cột Tháng Năm'><circle class='hit' cx='540' cy='348' r='34'/><g class='mk'><circle class='dot' cx='540' cy='348' r='5'/><text x='540' y='378'>Cột Tháng Năm</text></g></g><g class='loc' data-loc='Nhà Trưởng lão'><circle class='hit' cx='645' cy='270' r='34'/><g class='mk'><circle class='dot' cx='645' cy='270' r='5'/><text x='645' y='300'>Nhà Trưởng lão</text></g></g><g class='loc' data-loc='Phòng tàng thư'><circle class='hit' cx='740' cy='315' r='34'/><g class='mk'><circle class='dot' cx='740' cy='315' r='5'/><text x='740' y='345'>Phòng tàng thư</text></g></g><g class='loc' data-loc='Bìa rừng'><circle class='hit' cx='856' cy='346' r='34'/><g class='mk'><circle class='dot' cx='856' cy='346' r='5'/><text x='856' y='376'>Bìa rừng</text></g></g><g class='loc' data-loc='Nhà thảo dược'><circle class='hit' cx='825' cy='525' r='34'/><g class='mk'><circle class='dot' cx='825' cy='525' r='5'/><text x='825' y='555'>Nhà thảo dược</text></g></g><g class='loc' data-loc='Nhà nghi lễ thụ thai'><circle class='hit' cx='645' cy='590' r='34'/><g class='mk'><circle class='dot' cx='645' cy='590' r='5'/><text x='645' y='620'>Nhà thụ thai</text></g></g><g class='loc' data-loc='Bãi cỏ tiệc'><circle class='hit' cx='440' cy='505' r='34'/><g class='mk'><circle class='dot' cx='440' cy='505' r='5'/><text x='440' y='535'>Bãi cỏ tiệc</text></g></g><g class='loc' data-loc='Đồng cỏ'><circle class='hit' cx='125' cy='345' r='34'/><g class='mk'><circle class='dot' cx='125' cy='345' r='5'/><text x='125' y='375'>Đồng cỏ</text></g></g><g class='loc' data-loc='Bờ sông'><circle class='hit' cx='165' cy='480' r='34'/><g class='mk'><circle class='dot' cx='165' cy='480' r='5'/><text x='165' y='510'>Bờ sông</text></g></g><g class='loc' data-loc='Ngoài đồng'><circle class='hit' cx='80' cy='555' r='34'/><g class='mk'><circle class='dot' cx='80' cy='555' r='5'/><text x='80' y='585'>Ngoài đồng</text></g></g></svg></div></section>\n<section class=\"pg\" id=\"girls\"></section>\n</div>\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nhtml,body{overflow:hidden}\nbody{font-family:'Be Vietnam Pro','Noto Serif',serif;font-size:14px;line-height:1.7;color:#27302A;background:transparent}\n#bar{background:#FBFAF6;border:1px solid #E2DFD3;border-radius:12px;overflow:hidden}\n.tabs{display:flex;background:#F2F1EA;border-bottom:1px solid #E2DFD3}\n.tabs button{position:relative;flex:1;padding:10px 6px;border:0;background:none;font:inherit;color:#6B7166;cursor:pointer}\n.tabs button.on{color:#27302A;font-weight:700}\n.tabs button.on::after{content:\"\";position:absolute;left:28%;right:28%;bottom:0;height:3px;border-radius:3px 3px 0 0;background:#5E7E44}\n.pg{display:none;padding:14px 16px 16px}\n.pg.on{display:block}\n.bar{position:relative;height:10px;--g:linear-gradient(90deg,#5E7E44,#E8B923,#D8452F,#E48AA3,#8A6CB4,#3F6FB5)}\n.bar i{position:absolute;top:0;bottom:0;left:0;border-radius:5px;background-image:var(--g);background-repeat:no-repeat}\n.bar .rest{right:0;opacity:.22}\n.bar .fill{background-size:calc(100% / var(--p, 1)) 100%}\n.sched-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:12px;font-size:13px;letter-spacing:.08em}\n.sched-head b{font-size:16px;letter-spacing:.14em;color:#27302A}\n.sched-head span{color:#6B7166}\n.folk{position:relative;margin:12px 0 6px;border:1px solid #E2DFD3;border-radius:10px;overflow:hidden;background:#FFFFFF}\n.folk .pic{position:relative;aspect-ratio:16/9;background-size:cover;background-position:center;background-color:#E2DFD3}\n.folk .pic::after{content:\"\";position:absolute;inset:0;background:linear-gradient(to top,rgba(30,22,14,.72),rgba(30,22,14,0) 55%)}\n.folk .cap{position:absolute;left:0;bottom:0;display:flex;align-items:baseline;gap:12px;padding:0 18px 12px;color:#fff;text-shadow:0 1px 8px rgba(30,22,14,.6)}\n.folk .cap b{font-size:20px;letter-spacing:.14em}\n.folk .cap .th{font-size:13px;letter-spacing:.12em;opacity:.92}\n.folk .txt{padding:10px 16px 12px;font-size:12.5px;line-height:1.75}\n.folk .txt b{display:block;margin-bottom:2px;font-size:14px;letter-spacing:.14em}\n.folk .seam{height:4px}\n.folk .seam i{border-radius:0}\n@media (max-width:520px){.folk .cap{padding:0 12px 9px}.folk .cap b{font-size:17px}.folk .txt{padding:8px 12px 10px;font-size:12px}}\n.slot{display:grid;grid-template-columns:5.5em 1fr;gap:10px;margin-top:8px;padding:9px 12px;border-left:3px solid var(--c);border-radius:0 8px 8px 0;background:#FFFFFF}\n.slot[data-s=\"0\"]{--c:#E8B923}\n.slot[data-s=\"1\"]{--c:#D8452F}\n.slot[data-s=\"2\"]{--c:#E48AA3}\n.slot[data-s=\"3\"]{--c:#27407A}\n.slot .t{font-weight:700;color:var(--c)}\n.slot.past{opacity:.42}\n.slot.soon{background:transparent;color:#6B7166;opacity:.75}\n.slot.now{background:color-mix(in srgb,var(--c) 16%,#FFFFFF)}\n.chips{display:flex;flex-wrap:wrap;justify-content:center;gap:4px 22px;margin-bottom:14px}\n.chips button{padding:2px 0;border:0;border-bottom:2px solid transparent;background:none;font:inherit;color:#6B7166;cursor:pointer}\n.chips button:hover{color:#27302A}\n.chips button.on{color:#27302A;font-weight:700;border-bottom-color:var(--c)}\n.frame{position:relative;aspect-ratio:832/1216;overflow:hidden;border:1px solid #E2DFD3;border-radius:10px;background:linear-gradient(170deg,#F2F1EA,#FBFAF6)}\n.frame.wide{width:100%;aspect-ratio:50/33;border:0;background:none}\n.frame img{display:block;width:100%;height:100%;object-fit:cover}\n.map{display:block;width:100%;height:100%}\n.map .loc{cursor:pointer}\n.map .hit{fill:#fff;fill-opacity:0;pointer-events:all}\n.map .mk{pointer-events:none;filter:drop-shadow(0 0 1.5px rgba(30,22,14,.8)) drop-shadow(0 1px 4px rgba(30,22,14,.45));transition:transform .2s,filter .2s}\n.map .dot{fill:#FBFAF6;transform-box:fill-box;transform-origin:center;transition:transform .2s}\n.map text{font-size:20px;font-weight:600;letter-spacing:.08em;fill:#fff;text-anchor:middle}\n.map .loc:hover .mk{transform:translateY(-3px)}\n.map .loc.cur .mk,.map .loc.sel .mk{transform:translateY(-8px);filter:drop-shadow(0 0 1.5px rgba(30,22,14,.8)) drop-shadow(0 9px 6px rgba(30,22,14,.5))}\n.map .loc.cur .dot,.map .loc.sel .dot{transform:scale(1.5)}\n.info{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;opacity:0;pointer-events:none;transition:opacity .2s;background:#FBFAF6;font-size:12.5px;line-height:1.75;color:#27302A}\n.info.on{opacity:1;pointer-events:auto}\n.info .pic{flex:1;min-height:0;background-size:cover;background-position:center}\n.info .txt{padding:10px 16px 12px}\n.info b{display:block;margin-bottom:2px;font-size:15px;letter-spacing:.14em}\n.info b::after{content:\"Nhấn để quay lại bản đồ\";float:right;font-size:11px;font-weight:400;letter-spacing:.1em;color:#6B7166}\n@media (max-width:520px){.info{font-size:12px;line-height:1.65}.info b{font-size:14px}}\n.gview{--w:380px;display:flex;justify-content:center;gap:20px}\n.gview .frame{flex:none;align-self:flex-start;width:min(var(--w),55%)}\n.gview .cap{position:absolute;left:0;right:0;bottom:0;padding:28px 16px 10px;font-size:16px;letter-spacing:.14em;color:#fff;text-shadow:0 1px 8px rgba(30,22,14,.6);background:linear-gradient(to top,rgba(36,28,20,.5),rgba(36,28,20,0))}\n.side{flex:1;min-width:0;display:flex;flex-direction:column;gap:14px}\n.side b{font-size:24px;line-height:1.2;letter-spacing:.2em}\n.side b::after{content:\"\";display:block;width:32px;height:3px;margin-top:8px;border-radius:3px;background:var(--c)}\n.side p{font-size:14px;line-height:1.95;text-align:justify}\n.qa{display:flex;flex-direction:column;gap:12px}\n.qa .k{display:block;font-size:12px;line-height:1.6;letter-spacing:.08em;color:color-mix(in srgb,var(--c) 55%,#27302A)}\n.qa .k::before{content:\"\";display:inline-block;width:7px;height:7px;margin-right:8px;border-radius:50%;background:var(--c);vertical-align:1px}\n.qa .a{display:block;padding-left:15px;font-size:13.5px;line-height:1.7}\n.thumbs{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:6px}\n.thumbs button{flex:none;width:60px;aspect-ratio:832/1216;padding:0;border:2px solid transparent;border-radius:6px;overflow:hidden;background:none;opacity:.6;cursor:pointer;transition:opacity .15s}\n.thumbs button:hover,.thumbs button.on{opacity:1}\n.thumbs button.on{border-color:var(--c)}\n.thumbs img{display:block;width:100%;height:100%;object-fit:cover}\n@media (max-width:600px){.gview{flex-direction:column;align-items:center;gap:14px}.gview .frame{align-self:center;width:min(300px,100%)}.side{flex:none;width:100%}.side p{font-size:13px;line-height:1.85}.thumbs{order:-1;justify-content:center;margin:0 0 4px}}\n</style>");

// Hệ thống mô tả lịch trình tự viết theo góc nhìn người chơi trải nghiệm, không làm lộ trước kết quả
const TABLE = [
  ['Cùng Linnea bay đến Stockholm, nhận xe tại quầy thuê xe.', 'Lái xe lên phía bắc mất hơn nửa ngày, trên đường Linnea kể về ngôi làng và đại tiệc.', 'Gặp gỡ những người trẻ tuổi trở về làng tại bãi cỏ ngoài làng, cặp đôi người Anh Oliver và Harriet cũng ở trong số đó.', 'Mọi người cùng nhau ăn nấm, uống trà nấm và ngủ trên bãi cỏ.'],
  ['Đi bộ vào làng, cả làng ra đón chào khách, tộc trưởng Siv phát biểu, tuyên bố bắt đầu chín ngày đại tiệc.', 'Tham quan làng, xem Nhà chính và Cây Tổ Tiên, từ xa nhìn ngôi Đền thờ không được phép vào, những nơi khác đi theo người trong làng dẫn đường.', 'Tiệc chào mừng, bàn dài xếp thành hình cổ ngữ Rune, cả làng nâng ly chúc mừng, cùng hòa giọng cảm tạ.', 'Tại Ký túc xá thanh niên, tặng áo trắng và trao cổ ngữ Rune cho người ngoài, kể về bốn mùa đời người, ngắm ảnh các Nữ hoàng Tháng Năm qua các thời kỳ.'],
  ['Bữa trưa tiệc đứng ngày lễ, lũ trẻ nhảy múa, hai cụ già mặc lễ phục xanh lam thêu kim tuyến ngồi ở vị trí danh dự.', 'Cả làng xếp hàng lên núi, tới Vách đá ở phía tây bắc, các bậc trưởng lão đọc to Kinh Thánh dọc đường, hai cụ già đi ở hàng đầu tiên.', 'Lễ đặt tên, bậc trưởng lão xướng lên hai cái tên trước mặt mọi người, dành cho những đứa trẻ chưa chào đời.', 'Một góc bãi cỏ thắp lên ngọn lửa vĩnh cửu, cả làng vây quanh đống lửa khẽ hát đồng ca đến tận đêm muộn.'],
  ['Phụ nữ và các cô gái trên bãi cỏ dạy khách đan vòng hoa, vòng hoa đan xong sẽ tặng cho người mình vừa ý.', 'Không có tiết mục định sẵn, phụ nữ ở phía sau Nhà chính làm bánh nhân thịt cho bữa tiệc tối; phía Cây Tổ Tiên có lúc vọng lại tiếng khóc.', 'Tiệc tối, trên bàn có món bánh nhân thịt do chính tay các cô gái làm, sau bữa ăn có người đã rời bàn từ sớm.', 'Đêm bảy loài hoa, trước khi ngủ các cô gái hái bảy loài hoa đặt dưới gối, tương truyền sẽ mơ thấy người chồng tương lai.'],
  ['Dựng cột Tháng Năm, nhảy múa quanh cột, nhảy điệu ếch xanh.', 'Cuộc thi nhảy múa quanh cột Tháng Năm, người cuối cùng còn đứng vững khi nhảy quanh cột sẽ được bầu làm Nữ hoàng Tháng Năm.', 'Tiệc đăng quang Nữ hoàng, tân Nữ hoàng thay váy hoa ngồi vào vị trí danh dự, cả bàn lần lượt nâng ly chúc mừng nàng.', 'Sau khi tiệc đăng quang tàn, các trưởng lão gọi những người ngoài lại cùng nhau, hỏi thăm về một vị khách đã lâu không thấy xuất hiện.'],
  ['Nữ hoàng một mình cưỡi xe hoa đi tuần, ban phước cho mùa màng và gia súc.', 'Lễ thành nhân, những người kết thúc mùa xuân nhận cổ ngữ Rune mới, từ nay được tính là người của mùa hạ.', 'Hội đồng trưởng lão triệu tập người ngoài và những người vừa thành nhân tại Nhà Trưởng lão, mở ra bản đồ sao.', 'Ngôi làng yên tĩnh từ sớm, căn nhà gỗ nhỏ nơi cuối bãi cỏ sáng đèn.'],
  ['Sáng sớm trưởng lão gọi cả làng và khách đến trước căn lán gỗ cũ ven rừng.', 'Thần dụ giả Ruben vẽ tập mới trong Nhà Trưởng lão, các trưởng lão giải mã.', 'Trưởng lão gọi cả làng đến trước Đền thờ, khép lại vụ việc Kinh Thánh bị đánh cắp.', 'Không có tiết mục định sẵn, trên bãi cỏ đốt lửa trại, căn nhà nhỏ cuối bãi cỏ vẫn sáng đèn như thường lệ.'],
  ['Harriet không đến ăn sáng, người trong làng nói đã đưa cô ấy ra ga tàu.', 'Hái thảo dược và nấm ven rừng, phơi khô để pha trà.', 'Bàn tiệc có cá trích ngâm, khoai tây mới rắc thì là và bánh kem dâu tây, mọi người nâng ly hát bài ca uống rượu.', 'Lễ tế đêm bên sông, lũ trẻ diễn một vở kịch cổ bên mép nước, người lớn đứng bên cạnh dõi theo.'],
  ['Sau bữa sáng cả làng tụ họp ở Nhà chính, trưởng lão đọc to tên hai người trong làng, mọi người đồng thanh ngợi ca.', 'Cả làng chuẩn bị tế lễ, đan vòng hoa lớn, quét dọn Đền thờ, dắt gấu ra khỏi chuồng; bàn dài ở Bãi cỏ tiệc ghép thành một đường thẳng tắp.', 'Bữa tiệc bàn dài cuối cùng, cả làng cùng hát đồng ca.', 'Cả làng thức đêm trên bãi cỏ chờ trời sáng, căn nhà nhỏ cuối bãi cỏ sáng đèn đêm cuối cùng.'],
  ['Tế lễ trước Đền thờ màu vàng, trưởng lão lắc ống gỗ rút ra hai cái tên, do Nữ hoàng lựa chọn một người giữa hai người đó.', 'Chín người bước vào Đền thờ màu vàng, cánh cửa khép lại sau lưng họ.', 'Ngọn lửa trong Đền thờ dần lụi tàn, cả làng quây quần bên đống tàn tro.', 'Đại tiệc kết thúc, bạn phải đưa ra quyết định dứt khoát giữa ở lại và rời đi.']
];

const SLOTS = ['Buổi sáng', 'Buổi chiều', 'Chập tối', 'Ban đêm'];
const SLOTS_CN = ['上午', '下午', '傍晚', '夜里'];
const DAYNAME = ['Lần đầu đến Thụy Điển', 'Khai mạc đại tiệc', 'Bữa trưa và diễu hành', 'Hái hoa và tiệc tối', 'Cột Tháng Năm và đăng quang', 'Lễ thành nhân', 'Bìa rừng và Đền thờ', 'Hái thuốc và tế đêm', 'Chuẩn bị tế lễ', 'Tế lễ Đền thờ'];
const ASK = ['Thích ăn gì', 'Tài lẻ giấu kín nhất', 'Thứ nhỏ nhặt sợ nhất', 'Lần bẽ mặt gần nhất'];

const GIRLS = [
  { name: 'Lạc Cẩn', color: '#D8452F', intro: '21 tuổi, sinh viên năm 3 ngành Nhân học, là bạn gái đã hẹn hò một năm rưỡi của bạn. Trầm lặng, nhạy cảm, ở chỗ đông người ít nói nhưng luôn là người đầu tiên nhận ra cảm xúc bất ổn của ai đó; mỗi khi đến nơi lạ luôn phải đứng cạnh bạn trước tiên, đợi quen rồi mới cởi mở, thích nói thích cười, cũng thích làm nũng với bạn.',
    qa: ['Gà rán kèm coca, tướng ăn hào sảng từng bị bạn trêu', 'Xem phim kinh dị mặt không biến sắc, còn có thể bình phẩm ánh sáng', 'Bóng bay, luôn có cảm giác giây tiếp theo nó sẽ nổ tung', 'Lúc phỏng vấn đọc nhầm tên ông cụ được phỏng vấn thành tên giáo viên hướng dẫn'],
    pics: [
      ['Trên đường', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-luo-jin-lu-shang.webp'],
      ['Vào làng', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-luo-jin-ru-cun.webp'],
      ['Riêng tư', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-luo-jin-si-xia.webp']] },
  { name: 'Linnea', color: '#E8B923', intro: '22 tuổi, người Thụy Điển lớn lên ở Hårga, sang Trung Quốc học Nhân học, là bạn thân thiết không giấu nhau điều gì của Lạc Cẩn, cũng là người mời các bạn về làng lần này. Nói chuyện chậm rãi, thích lắng nghe người khác, khi cười mắt cong cong, ở bên cạnh cô ấy khiến người ta cảm thấy thư thái.',
    qa: ['Lẩu sách bò, cay đến mức người cùng bàn rơi nước mắt mà cô ấy vẫn đòi thêm một muỗng', 'Mạt chược, ở ký túc xá chưa từng thua bao giờ', 'Sầu riêng, cách một con phố ngửi thấy là phải đổi hướng đi ngay', 'Ở nhà ăn dùng tiếng địa phương mới học để gọi món, dì bán cơm ngơ ngác ba giây rồi đưa cho một bát canh không biết là canh gì'],
    pics: [
      ['Bên ngoài', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-li-ni-ya-wai-mian.webp'],
      ['Vào làng', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-li-ni-ya-ru-cun-v2.webp'],
      ['Riêng tư', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-li-ni-ya-si-xia.webp']] },
  { name: 'Britta', color: '#E48AA3', intro: '18 tuổi, cô gái Hårga, là cô em gái được Linnea chăm sóc từ nhỏ. Thẳng thắn nhiệt tình, thích ai là cho người đó biết ngay, có vô số câu hỏi về thế giới bên ngoài; bạn là chàng trai ngoại tộc đầu tiên cô ấy được tiếp xúc gần gũi đến thế.',
    qa: ['Dâu tây chấm muối, không ai hiểu nổi nhưng cô ấy ăn rất ngon lành', 'Huýt sáo bằng hai ngón tay, cách cả bãi cỏ có thể gọi đàn cừu quay về', 'Con ngỗng lớn ở đầu làng, ba năm rồi chưa đánh thắng nó lần nào', 'Đi đôi giày thể thao do Linnea mang về, đi nhầm chân trái phải suốt cả ngày'],
    pics: [
      ['Thường ngày', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-bu-li-ta-ri-chang.webp'],
      ['Nấu ăn', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-bu-li-ta-zuo-fan.webp'],
      ['Riêng tư', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-bu-li-ta-si-xia.webp']] },
  { name: 'Eira', color: '#8A6CB4', intro: '27 tuổi, thầy thuốc thảo dược của Hårga, từng sống ở bên ngoài vài năm, nói tiếng Anh lưu loát, mùa hè này trở về làng dự lễ hội. Điềm tĩnh dịu dàng, nói năng nhỏ nhẹ, trà trong làng và việc ăn ở của khách ngoài đều do cô chăm lo, luôn xuất hiện vào những thời điểm vừa vặn nhất.',
    qa: ['Mì tôm đêm khuya thêm hai quả trứng, thói quen xấu học được ở thành phố', 'Chơi trống, từng ở trong một ban nhạc ngầm ở Stockholm suốt một năm', 'Bướm đêm, rõ ràng ngày nào cũng tiếp xúc với cỏ cây thảo dược', 'Lần đầu đạp xe đạp công cộng, lao thẳng vào đài phun nước'],
    pics: [
      ['Bên ngoài', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-ai-la-wai-mian-v2.webp'],
      ['Về làng', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-ai-la-hui-cun-v2.webp'],
      ['Riêng tư', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-ai-la-si-xia-v2.webp']] },
  { name: 'Chúc Lẫm', color: '#3F6FB5', intro: '22 tuổi, sinh viên năm 4 ngành Nhân học, luận văn tốt nghiệp viết chính về Lễ Midsommar Thụy Điển. Xuất thân tiểu thư danh giá, tóc đen dài thẳng, dáng người cao ráo, ăn nói chừng mực, cứ hễ nhắc đến phong tục dân gian là mắt sáng rực. Tra cứu tài liệu, ghi chép lịch trình, giao thiệp với bậc trưởng bối phần lớn do cô ấy đảm nhiệm, là người đáng tin cậy nhất trong nhóm.',
    qa: ['Xí muội, mỗi khi bí ý tưởng viết luận văn là một ngày ăn hết một gói', 'Bắt chước khẩu âm các vùng miền, câu cửa miệng của thầy hướng dẫn học giống nhất', 'Nghe lại bản ghi âm của chính mình, lần nào cũng phải bịt tai lại', 'Cúi gập người hành lễ với một người dân làng đi ngang qua, người ta chỉ đang cúi xuống buộc dây giày'],
    pics: [
      ['Thường ngày', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-zhu-lin-ri-chang.webp'],
      ['Vào làng', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-zhu-lin-ru-cun.webp'],
      ['Riêng tư', 'https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/portrait-zhu-lin-si-xia.webp']] }
];

const MAPINFO = {
  "Bãi cỏ cột Tháng Năm": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-maypole-lawn.webp", "Bãi cỏ lớn được cắt tỉa bằng phẳng ngay chính giữa làng, rìa phía nam dựng tấm bia đá khắc cổ ngữ Rune. Đón khách, khiêu vũ, thức đêm, đốt lửa trại, phần lớn sự kiện lớn của làng đều được tổ chức ở đây."],
  "五月柱草坪": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-maypole-lawn.webp", "Bãi cỏ lớn được cắt tỉa bằng phẳng ngay chính giữa làng, rìa phía nam dựng tấm bia đá khắc cổ ngữ Rune. Đón khách, khiêu vũ, thức đêm, đốt lửa trại, phần lớn sự kiện lớn của làng đều được tổ chức ở đây."],
  "Bãi cỏ tiệc": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-feast-lawn.webp", "Bãi cỏ rộng mở ở phía nam Bãi cỏ cột Tháng Năm, bốn bề không có nhà cửa tiếp giáp. Khi mở tiệc, những chiếc bàn dài trải khăn trắng được ghép thành hình một cổ ngữ Rune khổng lồ, cả làng cùng ngồi ăn bữa tiệc bàn dài tại đây."],
  "宴席草坪": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-feast-lawn.webp", "Bãi cỏ rộng mở ở phía nam Bãi cỏ cột Tháng Năm, bốn bề không có nhà cửa tiếp giáp. Khi mở tiệc, những chiếc bàn dài trải khăn trắng được ghép thành hình một cổ ngữ Rune khổng lồ, cả làng cùng ngồi ăn bữa tiệc bàn dài tại đây."],
  "Nhà chính": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-main-house.webp", "Ngôi nhà gỗ dài hàng trăm năm tuổi nằm ở phía bắc bãi cỏ, trong đại sảnh trải suốt chiều dài ngôi nhà đều phủ khăn bàn trắng. Cả làng ăn bữa sáng tại đây, trên tường treo chân dung các Nữ hoàng Tháng Năm qua các thời kỳ."],
  "主屋": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-main-house.webp", "Ngôi nhà gỗ dài hàng trăm năm tuổi nằm ở phía bắc bãi cỏ, trong đại sảnh trải suốt chiều dài ngôi nhà đều phủ khăn bàn trắng. Cả làng ăn bữa sáng tại đây, trên tường treo chân dung các Nữ hoàng Tháng Năm qua các thời kỳ."],
  "Nhà bếp": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-kitchen.webp", "Gian bếp lớn thông ra phía sau đại sảnh Nhà chính, trên bếp lò bằng sắt đặt vài chiếc nồi lớn, trên xà nhà treo cá ướp và các bó thảo dược. Mọi món ăn cho bữa tiệc đều được bưng ra từ nơi này."],
  "厨房": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-kitchen.webp", "Gian bếp lớn thông ra phía sau đại sảnh Nhà chính, trên bếp lò bằng sắt đặt vài chiếc nồi lớn, trên xà nhà treo cá ướp và các bó thảo dược. Mọi món ăn cho bữa tiệc đều được bưng ra từ nơi này."],
  "Ký túc xá thanh niên": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-dormitory.webp", "Căn nhà gỗ cao lớn nằm ở phía tây bãi cỏ, tường nhà từ mặt đất lên đến xà nhà vẽ kín những bức bích họa rực rỡ sắc màu. Những người trẻ và khách ngoài được mời ngủ tại đây, ánh sáng đêm trắng rọi vào suốt cả đêm."],
  "青年宿舍": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-dormitory.webp", "Căn nhà gỗ cao lớn nằm ở phía tây bãi cỏ, tường nhà từ mặt đất lên đến xà nhà vẽ kín những bức bích họa rực rỡ sắc màu. Những người trẻ và khách ngoài được mời ngủ tại đây, ánh sáng đêm trắng rọi vào suốt cả đêm."],
  "Vách đá": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-cliff.webp", "Vách đá màu trắng trên ngọn núi phía tây bắc làng, con đường mòn xuyên qua rừng thông uốn lượn đi lên, dưới chân vách đá là bãi cát trắng mịn. Đứng từ đỉnh vách đá phóng tầm mắt nhìn xuống, toàn bộ ngôi làng nối liền nhau tạo thành hình dáng một cổ ngữ Rune."],
  "悬崖": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-cliff.webp", "Vách đá màu trắng trên ngọn núi phía tây bắc làng, con đường mòn xuyên qua rừng thông uốn lượn đi lên, dưới chân vách đá là bãi cát trắng mịn. Đứng từ đỉnh vách đá phóng tầm mắt nhìn xuống, toàn bộ ngôi làng nối liền nhau tạo thành hình dáng một cổ ngữ Rune."],
  "Đền thờ màu vàng": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-temple.webp", "Ngôi đền gỗ mái nhọn màu vàng tươi duy nhất mới được xây dựng trong làng, mái dốc trải dài từ đỉnh nhọn chạm thẳng xuống mặt đất, được dựng ròng rã suốt ba năm dành riêng cho đại tiệc lần này. Ngày thường cấm vào, người ngoài chỉ có thể đứng nhìn từ đằng xa."],
  "黄色神殿": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-temple.webp", "Ngôi đền gỗ mái nhọn màu vàng tươi duy nhất mới được xây dựng trong làng, mái dốc trải dài từ đỉnh nhọn chạm thẳng xuống mặt đất, được dựng ròng rã suốt ba năm dành riêng cho đại tiệc lần này. Ngày thường cấm vào, người ngoài chỉ có thể đứng nhìn từ đằng xa."],
  "Cây Tổ Tiên": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-ancestor-tree.webp", "Cây đại thụ trên gò đất phía dưới ngôi đền, phải ba bốn người ôm mới xuể, quanh gốc cây vây quanh bởi một vòng đá phủ rêu xanh. Dân làng tương truyền rằng nó kết nối với tất cả những người đã khuất, mỗi khi đi ngang qua họ thường đưa tay chạm nhẹ vào thân cây."],
  "祖先树": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-ancestor-tree.webp", "Cây đại thụ trên gò đất phía dưới ngôi đền, phải ba bốn người ôm mới xuể, quanh gốc cây vây quanh bởi một vòng đá phủ rêu xanh. Dân làng tương truyền rằng nó kết nối với tất cả những người đã khuất, mỗi khi đi ngang qua họ thường đưa tay chạm nhẹ vào thân cây."],
  "Nhà Trưởng lão": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-elder-house.webp", "Căn nhà gỗ cổ ở phía đông bãi cỏ không trổ cửa sổ thông thường, bốn bức tường vẽ kín tranh bích họa đen trắng, ánh sáng rọi xuống từ giếng trời. Hội đồng trưởng lão họp bàn việc làng ở đây, cạnh nhà có chiếc lồng gỗ nhốt chú gấu do làng nuôi."],
  "长老屋": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-elder-house.webp", "Căn nhà gỗ cổ ở phía đông bãi cỏ không trổ cửa sổ thông thường, bốn bức tường vẽ kín tranh bích họa đen trắng, ánh sáng rọi xuống từ giếng trời. Hội đồng trưởng lão họp bàn việc làng ở đây, cạnh nhà có chiếc lồng gỗ nhốt chú gấu do làng nuôi."],
  "Phòng tàng thư": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-library.webp", "Ngôi nhà gỗ thấp màu đen quét hắc ín ở phía đông Nhà Trưởng lão, không có cửa sổ, chỉ mở một ô cửa lấy sáng trên mái. Hàng trăm tập Kinh Thánh xếp theo niên đại trên giá, chìa khóa nằm trong tay trưởng lão."],
  "藏书室": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-library.webp", "Ngôi nhà gỗ thấp màu đen quét hắc ín ở phía đông Nhà Trưởng lão, không có cửa sổ, chỉ mở một ô cửa lấy sáng trên mái. Hàng trăm tập Kinh Thánh xếp theo niên đại trên giá, chìa khóa nằm trong tay trưởng lão."],
  "Vườn rau": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-garden.webp", "Nằm giữa Nhà chính và Ký túc xá thanh niên, các luống rau được bố trí theo hình dạng cổ ngữ Rune, một vạt dâu tây đang độ chín mọng. Yên tĩnh hơn bãi cỏ chính, khách ngoài thường ngồi trên băng ghế dài để ghi chép nhật ký."],
  "菜园": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-garden.webp", "Nằm giữa Nhà chính và Ký túc xá thanh niên, các luống rau được bố trí theo hình dạng cổ ngữ Rune, một vạt dâu tây đang độ chín mọng. Yên tĩnh hơn bãi cỏ chính, khách ngoài thường ngồi trên băng ghế dài để ghi chép nhật ký."],
  "Ngoài đồng": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-field.webp", "Vùng đất bằng phẳng ở phía nam ngôi làng trải dài đến tận chân núi, hoa lanh nở rộ sắc lam nhạt, gió thổi qua nhấp nhô như sóng nước. Cạnh đồng ruộng là bãi chăn thả gia súc, những người đang lao động nhìn từ xa trông như những chấm trắng nhỏ."],
  "田间": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-field.webp", "Vùng đất bằng phẳng ở phía nam ngôi làng trải dài đến tận chân núi, hoa lanh nở rộ sắc lam nhạt, gió thổi qua nhấp nhô như sóng nước. Cạnh đồng ruộng là bãi chăn thả gia súc, những người đang lao động nhìn từ xa trông như những chấm trắng nhỏ."],
  "Bìa rừng": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-forest-edge.webp", "Nhà cửa và ruộng đồng dừng lại tại đây, đi xa hơn về phía đông là cánh rừng hỗn giao vân sam, thông và bạch dương. Trên triền cỏ đón nắng mọc nhiều cây thuốc, trong căn lán gỗ đang phơi những lát nấm."],
  "林边": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-forest-edge.webp", "Nhà cửa và ruộng đồng dừng lại tại đây, đi xa hơn về phía đông là cánh rừng hỗn giao vân sam, thông và bạch dương. Trên triền cỏ đón nắng mọc nhiều cây thuốc, trong căn lán gỗ đang phơi những lát nấm."],
  "Nhà thảo dược": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-herb-house.webp", "Căn nhà gỗ nhỏ dưới triền cỏ ven rừng, trên xà treo ngược các bó thảo dược, một mặt tường xếp kín những hũ gốm dán ký hiệu cổ ngữ Rune. Trên lò quanh năm đun trà liu riu, các loại trà trong làng đều được pha chế tại đây."],
  "药草房": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-herb-house.webp", "Căn nhà gỗ nhỏ dưới triền cỏ ven rừng, trên xà treo ngược các bó thảo dược, một mặt tường xếp kín những hũ gốm dán ký hiệu cổ ngữ Rune. Trên lò quanh năm đun trà liu riu, các loại trà trong làng đều được pha chế tại đây."],
  "Bờ sông": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-river.webp", "Dòng sông chảy từ trên núi xuống phía tây nam làng, nước trong vắt và mát lạnh, phía thượng nguồn có một trạm thủy điện nhỏ cấp điện cho làng. Đoạn uốn cong hạ lưu là một bãi cạn, phụ nữ trong làng thường giặt giũ đồ vải lanh ở đây."],
  "河边": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-river.webp", "Dòng sông chảy từ trên núi xuống phía tây nam làng, nước trong vắt và mát lạnh, phía thượng nguồn có một trạm thủy điện nhỏ cấp điện cho làng. Đoạn uốn cong hạ lưu là một bãi cạn, phụ nữ trong làng thường giặt giũ đồ vải lanh ở đây."],
  "Nhà nghi lễ thụ thai": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-ritual-house.webp", "Ngôi nhà gỗ cổ rộng rãi ở rìa đông nam ngôi làng, bốn bề là cỏ cao và cây bạch dương, chỉ có một con đường mòn nhỏ dẫn tới. Trong chín ngày đại tiệc chỉ mở cửa vài đêm, ngày giờ do hội đồng trưởng lão quyết định."],
  "受孕仪式屋": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-ritual-house.webp", "Ngôi nhà gỗ cổ rộng rãi ở rìa đông nam ngôi làng, bốn bề là cỏ cao và cây bạch dương, chỉ có một con đường mòn nhỏ dẫn tới. Trong chín ngày đại tiệc chỉ mở cửa vài đêm, ngày giờ do hội đồng trưởng lão quyết định."],
  "Đồng cỏ": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-meadow.webp", "Triền cỏ thoai thoải ở phía tây ngôi làng, hoa dại nở rộ ngút ngàn tầm mắt, cỏ mọc cao đến đầu gối. Các cô gái ngồi giữa đồng cỏ đan vòng hoa, hoa dại trang hoàng trên bàn tiệc phần lớn cũng được hái từ nơi đây."],
  "草地": ["https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/scene-meadow.webp", "Triền cỏ thoai thoải ở phía tây ngôi làng, hoa dại nở rộ ngút ngàn tầm mắt, cỏ mọc cao đến đầu gối. Các cô gái ngồi giữa đồng cỏ đan vòng hoa, hoa dại trang hoàng trên bàn tiệc phần lớn cũng được hái từ nơi đây."]
};

const FOLK = [
  ["Trà nấm", "Đêm trước khi vào làng, những người trẻ trở về nấu trà nấm trên bãi cỏ ngoài làng mời khách uống. Uống vào cỏ cây như đang thở, màu sắc cũng trở nên đậm đà hơn. Người lần đầu uống luôn có người ở bên túc trực chờ cho đến khi tỉnh táo lại.", "https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/folk-mushroom-tea.webp"],
  ["Áo trắng và cổ ngữ Rune", "Người trong làng mặc trang phục vải lanh trắng do chính họ trồng và dệt, trên cổ áo cổ tay thêu cổ ngữ Rune của mỗi người, không có bộ nào giống bộ nào. Người ngoài vào làng đêm đầu tiên cũng nhận được một chiếc áo trắng và một cổ ngữ Rune, sau khi mặc vào đứng trong đám đông sẽ không còn phân biệt được ai là người ngoài.", "https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/folk-white-linen.webp"],
  ["Lễ đặt tên", "Khi người trong làng qua đời, tên tuổi của họ sẽ không biến mất mà được giữ lại cho một đứa trẻ chưa chào đời. Tại lễ đặt tên, bậc trưởng lão đọc to cái tên này trước toàn thể dân làng, mọi người đồng thanh đáp lời, đứa trẻ dù chưa cất tiếng khóc chào đời đã có cội nguồn.", "https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/folk-naming.webp"],
  ["Vòng hoa", "Các cô gái trên đồng cỏ hái hoa mao lương, cỏ ba lá, hoa chuông đan thành vòng hoa, trao tặng cho chàng trai trẻ mà mình ưng ý. Người nhận được đội lên ngay tại chỗ nghĩa là đón nhận tấm lòng ấy.", "https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/folk-flower-crown.webp"],
  ["Cột Tháng Năm", "Mọi người dựng cây cột Tháng Năm quấn đầy lá cây và hoa dại ở chính giữa bãi cỏ, dưới thanh xà ngang chữ thập treo hai vòng hoa. Cả làng nắm tay nhau nhảy múa vòng tròn quanh cột, rồi ngồi xổm xuống bắt chước điệu nhảy chú ếch.", "https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/folk-maypole.webp"],
  ["Lễ thành nhân", "Những người bước sang tuổi mười tám thay chiếc áo trắng mới may, cổ áo để trống một khoảng, bậc trưởng lão khắc cổ ngữ Rune mới lên thẻ gỗ trao cho họ, phụ nữ thêu trực tiếp lên áo ngay tại chỗ. Lũ trẻ cất tiếng hát tiễn họ rời khỏi mùa xuân, từ nay chính thức được tính là người của mùa hạ.", "https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/folk-coming-of-age.webp"],
  ["Đồng cảm", "Một người khóc, những người bên cạnh khóc theo; một người hát, cả làng cùng hòa giọng, cao thấp ngân dài đều nương theo người đó. Khi vây quanh đống lửa trại, cả làng đứng thành nhiều vòng tròn, cùng xướng lên một điệu hát không lời.", "https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/folk-bonfire.webp"],
  ["Đại tiệc Đêm Giữa Hạ", "Trên bàn bày cá trích ngâm, khoai tây mới rắc thì là, kem chua trộn hành hoa và bánh kem dâu tây, rượu là bia và rượu mạnh do làng tự ủ. Trước mỗi ngụm rượu mạnh, cả bàn cùng hát vang một đoạn bài ca uống rượu.", "https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/folk-feast.webp"],
  ["Kinh Thánh", "Kinh Thánh được viết bằng mười sáu cổ ngữ Rune độc nhất vô nhị của Hårga, mỗi cổ ngữ tương ứng với một trạng thái cảm xúc, xếp từ thiêng liêng nhất đến phàm tục nhất. Hàng trăm tập nối tiếp nhau, phía sau mỗi tập đều để lại những trang giấy trắng, bởi vì nó sẽ không bao giờ được viết hết.", "https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/folk-sacred-book.webp"],
  ["Váy hoa Nữ hoàng Tháng Năm", "Nữ hoàng Tháng Năm khi đăng quang thay một chiếc váy dài, vô vàn bông hoa tươi đính kết trên đó, hoa lá xếp lớp tầng tầng buông rủ xuống tận chân. Dân làng bảo rằng, đó là đem cả một đồng cỏ mặc lên người.", "https://testingcf.jsdelivr.net/gh/abcxyzeric/card108@main/assets/folk-flower-gown.webp"]
];

const el = (id) => document.getElementById(id);

// Chỉ hiển thị ở phản hồi mới nhất của AI: SillyTavern không tính lại độ sâu regex của các phản hồi cũ, phản hồi ẩn không bị giới hạn độ sâu, nên tự ẩn toàn bộ iframe
const floor = getCurrentMessageId();
const only = () => { frameElement.style.display = floor === getLastMessageId() || !getChatMessages(`${floor + 1}-${getLastMessageId()}`, { role: 'assistant' }).length ? '' : 'none'; };
only();
[tavern_events.CHARACTER_MESSAGE_RENDERED, tavern_events.MESSAGE_DELETED].forEach((e) => eventOn(e, only));

await waitGlobalInitialized('Mvu');
const mvuData = Mvu.getMvuData({ type: 'message', message_id: 'latest' });
const sd = mvuData ? mvuData.stat_data : {};
const thoiKhong = (sd && (sd['Thời không'] || sd['时空'])) || {};
const day = Number(thoiKhong['Ngày'] ?? thoiKhong['日期'] ?? 0);
const slotVal = String(thoiKhong['Buổi'] ?? thoiKhong['时段'] ?? 'Buổi sáng');
const locVal = String(thoiKhong['Địa điểm'] ?? thoiKhong['地点'] ?? 'Sân bay');

let slot = SLOTS.indexOf(slotVal);
if (slot < 0) slot = SLOTS_CN.indexOf(slotVal);
if (slot < 0) slot = 0;

// ==== Lịch trình 9 ngày ====
const p = (day + (slot + 1) / 4) / 10;
const safeDay = Math.min(Math.max(day, 0), TABLE.length - 1);
const rows = TABLE[safeDay].map((x, s) => {
  const text = s > slot ? 'Chưa tới' : x;
  return '<div data-s="' + s + '" class="slot ' + (s < slot ? 'past' : s === slot ? 'now' : 'soon') + '"><span class="t">' + SLOTS[s] + '</span><span>' + text + '</span></div>';
}).join('');
const seam = '<div class="bar seam"><i class="rest"></i><i class="fill" style="width:' + p * 100 + '%;--p:' + p + '"></i></div>';
const dayLabel = safeDay === 0 ? 'Ngày đến' : 'Ngày ' + safeDay;
const safeFolk = FOLK[safeDay] || FOLK[0];
el('sched').innerHTML = '<div class="folk"><div class="pic"' + (safeFolk[2] ? ' style="background-image:url(' + safeFolk[2] + ')"' : '') + '><div class="cap"><b>' + safeFolk[0] + '</b><span class="th">' + dayLabel + ' · ' + DAYNAME[safeDay] + '</span></div></div>' + seam + '<div class="txt"><b>' + safeFolk[0] + '</b>' + safeFolk[1] + '</div></div>' +
  '<div class="sched-head"><b>' + dayLabel + '</b><span>' + SLOTS[slot] + '</span></div>' + rows;

// ==== Bản đồ làng ====
const box = el('map').querySelector('.frame');
const map = box.querySelector('.map');
const info = box.appendChild(document.createElement('div'));
info.className = 'info';

const mapLocViToCn = {
  'Sân bay': '机场', 'Trên đường': '路上', 'Bãi cỏ ngoài làng': '村外草地',
  'Bãi cỏ cột Tháng Năm': '五月柱草坪', 'Bãi cỏ tiệc': '宴席草坪', 'Nhà chính': '主屋',
  'Nhà bếp': '厨房', 'Ký túc xá thanh niên': '青年宿舍', 'Vách đá': '悬崖',
  'Đền thờ màu vàng': '黄色神殿', 'Cây Tổ Tiên': '祖先树', 'Nhà Trưởng lão': '长老屋',
  'Phòng tàng thư': '藏书室', 'Vườn rau': '菜园', 'Ngoài đồng': '田间',
  'Bìa rừng': '林边', 'Nhà thảo dược': '药草房', 'Bờ sông': '河边',
  'Nhà nghi lễ thụ thai': '受孕仪式屋', 'Đồng cỏ': '草地'
};
const mapLocCnToVi = Object.fromEntries(Object.entries(mapLocViToCn).map(([k, v]) => [v, k]));

map.querySelectorAll('.loc').forEach((g) => {
  const isCur = g.dataset.loc === locVal || mapLocViToCn[g.dataset.loc] === locVal || mapLocCnToVi[g.dataset.loc] === locVal;
  g.classList.toggle('cur', isCur);
});

let open = null;
box.addEventListener('click', (e) => {
  const g = e.target.closest('.loc');
  open = g && g !== open ? g : null;
  map.querySelectorAll('.loc').forEach((x) => x.classList.toggle('sel', x === open));
  info.classList.toggle('on', !!open);
  if (!open) return;
  const item = MAPINFO[open.dataset.loc] || MAPINFO[mapLocViToCn[open.dataset.loc]] || MAPINFO[mapLocCnToVi[open.dataset.loc]];
  if (!item) return;
  const [img, text] = item;
  info.innerHTML = '<div class="pic" style="background-image:url(' + img + ')"></div><div class="txt"><b>' + open.dataset.loc + '</b>' + text + '</div>';
});

// ==== Câu chuyện của họ ====
const gp = el('girls');
let gi = 0;
function girl(i) {
  gi = i;
  const { name, color, intro, qa, pics } = GIRLS[i];
  gp.innerHTML = '<div class="chips">' + GIRLS.map((x, j) => '<button style="--c:' + x.color + '" class="' + (i === j ? 'on' : '') + '" data-i="' + j + '">' + x.name + '</button>').join('') + '</div>' +
    '<div class="gview" style="--c:' + color + '"><div class="frame"><img><div class="cap"></div></div><div class="side"><b>' + name + '</b><p>' + intro + '</p><div class="qa">' +
    qa.map((a, k) => '<div><span class="k">' + ASK[k] + '</span><span class="a">' + a + '</span></div>').join('') + '</div><div class="thumbs">' +
    pics.map((x, k) => '<button data-k="' + k + '"><img src="' + x[1] + '"></button>').join('') + '</div></div></div>';
  pick(0);
}
function pick(k) {
  const x = GIRLS[gi].pics[k];
  gp.querySelector('.frame img').src = x[1];
  gp.querySelector('.cap').textContent = x[0];
  gp.querySelectorAll('.thumbs button').forEach((b, j) => b.classList.toggle('on', j === k));
}
gp.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.i) girl(Number(b.dataset.i));
  else pick(Number(b.dataset.k));
});
girl(0);

// ==== Chuyển tab ====
document.querySelector('.tabs').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  document.querySelectorAll('.tabs button').forEach((x) => x.classList.toggle('on', x === b));
  document.querySelectorAll('.pg').forEach((x) => x.classList.toggle('on', x.id === b.dataset.p));
});
