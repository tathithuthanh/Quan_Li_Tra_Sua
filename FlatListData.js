
var flatListData = [
  {
    key: '1',
    name: 'Trà sữa dâu tây',
    money: '29000',
    info: 'Team yêu những trái dâu tây căng mọng, ửng hồng vô cùng đáng yêu điểm danhhhhhh! Các bạn không quên trà sữa dâu tây nhà BoBapop đấy chứ? Vị chua chua, tươi mát của dâu quyện cùng vị trà xanh chát dịu, vị sữa beo béo đặc trưng của bobapop, trà sữa Dâu tây không những là thức uống giải nhiệt mà còn bổ sung vitamin, tốt dáng đẹp da nữa nhé.',
    image: 'https://jarvis.vn/uploaded/tra-sua-dau-tay.jpg',
  },
  {
    key: '2',
    name: 'Trà sữa bạc hà',
    money: '30000',
    info: 'Hôm nay ai đã uống Trà sữa bạc hà rồi nè? Ai chưa uống, hay ai đang thèm? Điểm danh cấp tốc nào cả nhà ơi...Nói về vị thì chắc chắn là mát rười rượi rồi ấy, màu đẹp ơi là đẹp luôn, team thích cảm giác the mát thì làm sao mà bỏ qua được món khoái khẩu này chứ nhỉ?',
    image: 'https://jarvis.vn/uploaded/cach-pha-che-tra-sua-bac-ha.jpg',
  },
  {
    key: '3',
    name: 'Trà xanh sữa tươi',
    money: '39000',
    info: 'Khác với "Trà Sữa Matcha" thì "Trà Xanh Sữa Tươi" của Bobapop có màu trắng, là sự kết hợp hài hòa của vị thơm béo đặc trưng của sữa, vị thanh đắng của trà xanh. Bobapop hoàn toàn sử dụng nguyên liệu thiên nhiên và không thêm bất cứ phẩm màu nào để mang đến cho quý khách hàng một ly "Trà Xanh Sữa Tươi" thơm ngon, bổ dưỡng. Bên cạnh đó khi uống để tăng thêm sự "thú vị" cho ly trà sữa của mình, chúng ta có thể kết hợp kèm với hạt trân châu dai mềm, và các loại topping khác nhé.',
    image: 'https://emvaobep.com/wp-content/uploads/2017/08/cach-pha-tra-sua-tra-xanh-thanh-mat.jpg',
  },
  {
    key:'4',
    name: 'Trà sữa Ô Long',
    money: '29000',
    info: 'Trà Ô Long là một trong những loại trà đậm vị nhất nhì tại BoBaPoP, nhưng cũng vì vị trà đậm mà khi kết hợp với sữa để tạo ra món Trà Sữa Ô Long thì lại ngon không cưỡng nổi đâu.',
    image: 'https://static.vietnammm.com/images/restaurants/vn/OPRNPRP/products/tra-dao-cao-cap.png',
  },
  {
    key: '5',
    name: 'Sữa tươi trân châu',
    money: '35000',
    info: 'Nằm trong season mưa cũng với Trà Bóng Mưa và Trà ô long hoa quế. Sữa tươi trân châu đường đen thì quá quen thuộc với nhà nhà rồi. Phần sữa ở đây béo béo và không quá ngọt. Phần trân châu ngọt và thơm tuy giống caramel hơn là mùi đường đen',
    image: 'https://i.a4vn.com/2018/10/26/khong-phai-sua-tuoi-tran-chau-duong-den-ma-la-sua-tuoi-lava-trun-6ac40f.jpg',
  },
  {
    key: '6',
    name: 'Trà sữa Lotus',
    money:'40000',
    info:'Có vị bùi bùi, ngọt ngọt mà không ngấy. Chắc chắn sẽ là món giải khát không thể thiếu trong mùa hè bốc lửa. Không những mang đến sự sảng khoái giải nhiệt mà còn vô cùng bổ dưỡng và là người bạn không thể thiếu đối với sức khỏe của bạn',
    image:'https://images.foody.vn/res/g79/780208/prof/s576x330/foody-upload-api-foody-mobile-hmnnn-jpg-181003120427.jpg',
  }, 
  {
   key: '7',
    name: 'Trà sữa 3Q',
    money:'40000',
    info:'Nhắc đến trà sữa Bobapop không thể không kể đến TRÀ SỮA 3Q, Bobapop có nhiều vị trà lẫn trà sữa nghe tên thật độc đáo phải không nè. Trà sữa 3Q mang hương vị trà sữa truyền thống béo thơm vị sữa hòa quyện cùng vị trà đậm đà kết hợp với 3 loại topping siêu ngon: flan trứng, trân châu đen và sương sáo. Một ly size L siêu nhiều trà topping ăn mỏi cả miệng, các bạn tín đồ trà sữa đừng bỏ lỡ nhé!',
    image:'https://d1sag4ddilekf6.cloudfront.net/Merchants/5-CYUGMEJVJRLKR2/photos/36cef7d259524852bc26ade3a0db6d3d_1568974433252667661.jpeg',
  },
  {
    key: '8',
    name: 'Trà thanh xuân',
    money:'35000',
    info:'Không phải vô cớ mà Bobapop tớ đây đặt tên bạn trà này là THANH XUÂN TRÀ đâu nha. Có một bí mật nằm ờ hương vị. THANH XUÂN TRÀ mang hương vị trọn vẹn của chanh dây và dâu. Một ngụm, chua chua, ngọt ngọt, cực đậm đà sẽ làm bạn liên tưởng ngay đến tháng ngày rực rỡ, khi tuổi trẻ là những gì bạn có trong tay. Bao nhiêu cuồng nhiệt, không bao giờ quên. TRÀ THANH XUÂN: Vị Dâu + Chanh dây + Hạt đẹp',
    image:'http://store.bobapop.com.vn/resource/uploads/2019/06/12-Thanh-Xuan-600x600.jpg',
  },
  {
    key: '9',
    name: 'Trà Đào',
    money:'35000',
    info:'Món Trà Đào mát lạnh thơm phức với topping là những miếng đào vàng ươm ngon lành luôn là sự lựa chọn yêu thích của rất nhiều bạn khi đến với  BOBAPOP. Trà đào thơm ngon chút đăng đắng của trà hòa cùng với vị ngọt thơm của đào, uống vào mát lạnh, tin chắc sẽ xóa tan cơn nóng trong người bạn.Mách nhỏ, trà đào không chỉ thơm ngon còn rất tốt cho sức khỏe và làm đẹp nha các bạn gái. Nhìn hình thôi cũng thấy hấp dẫn rồi đúng không? Cuối tuần rồi nè, còn chần chờ gì mà không tự thưởng cho mình một ly',
    image:'https://cdn.dayphache.edu.vn/wp-content/uploads/2019/05/hong-tra-dao.jpg',
  },
  {
  key: '10',
  name: 'Trà sủi bọt',
  money: '40000',
  info: 'Đó là 1 lớp kem sủi bọt đặc được phủ lên phía trên Trà, có một chút vị béo béo, mặn mặn, hài quyện chung với vị trà ngọt chát thanh nhẹ, tạo nên một hương vị vô cùng độc đáo mà chắc chắn bạn không dễ gì quên được. Lớp kem sủi bọt này có thể kết hợp được với tất cả các loại trà, tuỳ khẩu vị từng người. Và cách uống cũng khá đơn giản. Bạn có thể khuấy đều lên để trà và sủi bọt quyện vào nhau, hoặc bạn cũng có thể cầm ly lên uống từ miệng ly để cảm nhận được vị trà truyền qua lưỡi, sau đó là lớp sủi bọt.',
  image: 'https://lamkem.net/wp-content/uploads/2017/06/cach-lam-hong-tra-sui-bot-rat-don-gian-ma-ban-nen-biet.jpg',
  },
  {
  key: '11',
  name: 'Trà xanh KIWI',
  money: '35000',
  info: 'Có bạn nào thích trái Kiwi không nè? Có TRÀ XANH KIWI của Bobapop đây rồi! Nhìn ly trà là đã cảm thấy kích thích rồi, trà xanh kiwi là sự lựa chọn tuyệt vời cho những bạn yêu thích vị chua chua ngọt ngọt nè, màu trà xanh cực bắt, uống cùng thủy tinh kiwi nữa thì quên lối về luôn nha.',
  image: 'https://i.ytimg.com/vi/lZYZ5YmJxIA/hqdefault.jpg',
  },
  {
  key: '12',
  name: 'Bí đao trà chanh',
  money: '45000',
  info: 'Trà bí đao là loại thức uống mát, mang hương thơm nhè nhẹ và vị ngọt rất thanh, đặc biệt rất tốt cho sức khoẻ và làn da của phái đẹp nữa đó. Bạn nào bị "ghiền" hương thơm và vị trà bí đao thì sao lại bỏ qua top Trà Bí Đao chỉ có ở BoBaPoP chứ nhỉ ?',
  image: 'https://moingay.org/wp-content/uploads/2018/03/download-23-300x150.jpg',
  },
  {
      key: '13',
  name: 'Trà gạo nâu',
  money: '29000',
  info: 'Cô bạn “gạo nâu” này chắc chắn là 1 trong những người bạn cực kì thân thiết của hội mê BoBaPoP phải không nào? Còn gì tuyệt vời hơn hương thơm nhè nhẹ của gạo rang, xem lẫn vị trà thanh và sữa béo. Có thể bạn sẽ thấy vị hơi lạ nếu lần đầu uống nhưng uống xong là ghiền luôn cho coi. thơm nhẹ gạo nâu, thơm trà, lớp kem ngọt beo béo',
  image:'http://gaovietco.com/img_data/images/2(3).jpg',
  },
  {
     key: '14',
  name: 'Trà xanh mật ong',
  money: '29000',
  info: 'Cái tên nói lên tất cả hehe. Trà xanh dành cho các bạn có khẩu vị thích vị trà chát chát 1 chút xíu, đậm mùi trà, còn mật ong mà đi cùng với chanh thì hết sẩy. Vị ngọt mà mật ong mang lại vô cùng đặc biệt, không chỉ về hương vị mà còn rất tốt cho sức khỏe của bạn nữa đó. Thêm chút mật ong, chút vitamin C từ chanh cho cơ thể vào những ngày tháng 4 nắng nóng là sự lựa chọn tuyệt vời nè',
  image:'https://i.khoahoc.tv/photos/image/2016/02/15/mat-ong-3.jpg',
  },
  {
     key: '15',
  name: 'Trà sữa socola sủi bọt',
  money: '29000',
  info: 'Lớp kem tưởng chừng như mặn quá hoá ra lại quyện hoàn hảo với trà sữa bên dưới. Hay nhất là hương vị mát lạnh run người của bạc hà, hút mãi không chán. Trà sữa bình thường thì uống ổn chứ không đặc biệt. Các loại có vị ngọt khác nhau, xanh sữa là thơm và vừa nhất. Thêm trân châu đen hay trắng cũng hợp luôn',
  image:'https://static.vietnammm.com/images/restaurants/vn/N11051Q/products/socola-tran-chau-duong-den.png',
  },
  {
      key: '16',
  name: 'Trà bóng mưa',
  money: '32000',
  info: 'Trà bóng mưa - vị vải thanh mát mùa hè. Cùng Bobapop thưởng thức loại trà mới toanh dành riêng cho mùa hè nào! Vị vải thơm thơm đáng yêu, topping sẵn có là hạt nha đam thanh mát nữa, nên TRÀ BÓNG MƯA sẽ chiếm trọn tình yêu trong mùa hè này nhé!',
  image:'data:image/jpeg;base64,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',
  },
  {
      key: '17',
  name: 'Trà sữa hạnh nhân',
  money: '29000',
  info: 'Vị HẠNH NHÂN vẫn luôn là vị hấp dẫn trong menu trà sữa của Bobapop đó nha. Ngọt ngào mà không ngán là điểm mà các Bobaholic thích thú với món này. Cùng đến và thưởng thức với giá cực ưu đãi nào.',
  image:'https://dayphache.edu.vn/wp-content/uploads/2017/04/2c3125eb8597b442fad87e2c031423e6.jpg',
  },
  {
      key: '18',
  name: 'Trà sữa hoa lục trà',
  money: '39000',
  info: 'Chung họ hàng với trà sữa gạo nâu ở trên nhưng vị của hoa lục trà cũng rất đặc biệt nha. Nếu bạn yêu thích cảm giác nhẹ nhàng, thoang thoảng thì trà hoa lục trà sẽ khiến bạn thích mê đấy, bạn cũng có thể thêm sữa để trở thành TRÀ SỮA HOA LỤC TRÀ hay thêm sủi bọt để trở thành trà hoa lục trà sủi bọt nữa nhé.',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwJ3wE6Defmh1hIZBW-nWFgFYUE6p6vcfS5PKbflBqiLdj5T4&s',
  },
  {
      key: '19',
  name: 'Trà sữa khoai môn',
  money: '29000',
  info: 'Đến BoBaPoP uống gì ngon? TRÀ SỮA KHOAI MÔN đi nhaaaaaaa. Vì sao BoBaPoP lại khuyến nghị gọi món này nhỉ? Vì Trà Sữa Khoai Môn rất ngon, mùi rất thơm và vị beo béo nữa. Trà Sữa Khoai Môn vị thanh nhẹ, béo béo đã làm say đắm biết bao nhiêu tín đồ trà sữa tại BoBaPoP rồi. Người tiếp theo sẽ là bạn đó hih',
  image:'https://sieuthinguyenlieu.com/profiles/sieuthinguyenlieucom/uploads/attach/1544002625_tra-sua-khoai-mon.jpg',
  },
  {
    key: '20',
    name: 'Trà xanh Nhật Bản',
    money:'39000',
    info: 'Những tín đồ của ẩm thực Nhật Bản, chắc cũng đã “phải lòng” món Trà Sữa Trà Xanh Nhật Bản đây. Trà Sữa Trà Xanh Nhật Bản được pha chế hoàn toàn từ bột trà xanh (hay còn gọi là Matcha) nguyên chất, nhập khẩu 100% từ xứ sở Hoa Anh Đào, mang đến cho bạn hương vị trà đúng nhất và chuẩn nhất, không có chỗ nào phải chỉnh luôn.',
    image: 'https://i-shop.vnecdn.net/resize/560/560/images/2019/03/27/5c9b6b6d056ed-Matcha-Latte-OneLife-04.jpg',
  },
];


var cartData = [];
var historyCart = [];
var imageBackground = 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-summer-drink-poster-background-material-image_154446.jpg';
var imageInfoFood = 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-milk-tea-shop-cold-drink-shop-price-list-background-material-image_150835.jpg';
module.exports = {flatListData, cartData, historyCart, imageBackground, imageInfoFood };