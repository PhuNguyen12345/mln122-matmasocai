import type { Question } from '../types/game'

export const questions = [
  {
    id: 1,
    stage: 1,
    stageTitle: 'Hàng hóa không đến được với con người',
    coin: 100,
    difficulty: 'Dễ',
    title: 'Khi nào lúa trở thành hàng hóa?',
    scene:
      'Nông dân Nira trồng lúa để bán tại khu chợ Novus. Một phần lúa được gia đình bà giữ lại để ăn.',
    prompt: 'Trong trường hợp nào số lúa của Nira trở thành hàng hóa?',
    answers: [
      {
        id: 'A',
        text: 'Ngay khi lúa được thu hoạch',
        feedback:
          'Lúa đã thu hoạch là một sản phẩm của lao động, nhưng chưa nhất thiết là hàng hóa. Nếu gia đình Nira giữ lúa để trực tiếp sử dụng, sản phẩm đó không đi vào quan hệ trao đổi và chưa mang hình thái hàng hóa.',
      },
      {
        id: 'B',
        text: 'Khi lúa thỏa mãn nhu cầu ăn uống',
        feedback:
          'Khả năng đáp ứng nhu cầu ăn uống thể hiện giá trị sử dụng của lúa. Tuy nhiên, một vật có ích chưa tự động là hàng hóa; nó còn phải được sản xuất nhằm mục đích trao đổi hoặc mua bán.',
      },
      {
        id: 'C',
        text: 'Khi lúa được sản xuất và đưa ra trao đổi, mua bán',
        feedback:
          'Chính xác. Sản phẩm của lao động trở thành hàng hóa khi có khả năng thỏa mãn nhu cầu và được sản xuất để trao đổi, mua bán. Phần lúa Nira đem ra chợ là hàng hóa; phần gia đình giữ lại để ăn thì không.',
      },
      {
        id: 'D',
        text: 'Chỉ khi lúa được thanh toán bằng tiền',
        feedback:
          'Tiền giúp việc trao đổi thuận tiện hơn nhưng không phải điều kiện bắt buộc để sản phẩm trở thành hàng hóa. Hàng hóa từng được trao đổi trực tiếp với nhau trước khi tiền tệ phát triển đầy đủ.',
      },
    ],
    correctAnswer: 'C',
    conclusion:
      'Hàng hóa là sản phẩm của lao động có thể thỏa mãn một nhu cầu nào đó của con người thông qua trao đổi, mua bán. Cùng một loại lúa nhưng mục đích sử dụng khác nhau sẽ tạo trạng thái khác nhau: phần dùng trực tiếp là sản phẩm tiêu dùng của gia đình; phần đưa ra trao đổi mang hình thái hàng hóa.',
    evidence: {
      id: 'E01',
      index: 1,
      code: 'NX-14-650',
      title: 'Phiếu xuất kho của Nira',
      category: 'Hồ sơ lưu thông',
      lines: [
        'Kho lúa Nira — Ngày 14 mùa Hạ',
        'Tổng số: 800 bao',
        'Gia đình giữ lại: 150 bao',
        'Đăng ký bán tại chợ: 650 bao',
      ],
      highlight: 'Đăng ký bán tại chợ: 650 bao.',
    },
    lifelines: {
      eliminate: ['A', 'D'],
      poll: { A: 12, B: 16, C: 66, D: 6 },
      npc: {
        id: 'mara',
        name: 'Mara',
        role: 'Tiểu thương Novus',
        hint:
          'Hãy phân biệt một sản phẩm được gia đình sử dụng trực tiếp với một sản phẩm được đưa tới chợ để đổi lấy sản phẩm khác.',
      },
      theory:
        'Một sản phẩm có ích chưa chắc đã là hàng hóa. Sản phẩm chỉ mang hình thái hàng hóa khi được tạo ra nhằm trao đổi hoặc mua bán. Vì vậy, cùng một sản phẩm vật chất có thể là hàng hóa trong trường hợp này nhưng không phải hàng hóa trong trường hợp khác.',
    },
  },
  {
    id: 2,
    stage: 1,
    stageTitle: 'Hàng hóa không đến được với con người',
    coin: 200,
    difficulty: 'Dễ',
    title: 'Phân công lao động xã hội',
    scene:
      'Nira chuyên trồng lúa, Doran sửa máy và Mara làm bánh. Mỗi người tạo ra một sản phẩm khác nhau nhưng đều cần sản phẩm của người khác.',
    prompt:
      'Việc Nira trồng lúa, Doran sửa máy và Mara làm bánh phản ánh điều kiện nào của sản xuất hàng hóa?',
    answers: [
      {
        id: 'A',
        text: 'Phân công lao động xã hội',
        feedback:
          'Chính xác. Mỗi người chuyên thực hiện một hoạt động khác nhau, từ đó tạo ra các sản phẩm riêng. Vì nhu cầu của mỗi người đa dạng hơn sản phẩm họ làm ra, họ phải trao đổi với nhau.',
      },
      {
        id: 'B',
        text: 'Sự xuất hiện của tiền giấy',
        feedback:
          'Tiền giấy không tạo ra sự chuyên môn hóa nghề nghiệp. Sản xuất hàng hóa và trao đổi đã tồn tại trước tiền giấy; tiền chỉ phát triển để giải quyết những hạn chế của trao đổi trực tiếp.',
      },
      {
        id: 'C',
        text: 'Nhà nước quy định giá bán',
        feedback:
          'Việc quy định giá không giải thích vì sao Nira, Doran và Mara sản xuất những sản phẩm khác nhau. Dữ kiện trung tâm là sự phân chia lao động thành các ngành nghề chuyên môn hóa.',
      },
      {
        id: 'D',
        text: 'Mọi tư liệu sản xuất thuộc cùng một chủ thể',
        feedback:
          'Nếu mọi sản phẩm và tư liệu đều thuộc một chủ thể thống nhất, quan hệ giữa các đơn vị có thể mang tính phân phối nội bộ thay vì trao đổi giữa các chủ thể độc lập. Điều này không phản ánh tình huống đã nêu.',
      },
    ],
    correctAnswer: 'A',
    conclusion:
      'Phân công lao động xã hội là sự phân chia lao động thành những ngành nghề khác nhau, tạo ra sự chuyên môn hóa. Mỗi chủ thể chỉ sản xuất một hoặc một số sản phẩm nhưng cần nhiều sản phẩm khác để sinh sống và sản xuất, từ đó hình thành nhu cầu trao đổi.',
    evidence: {
      id: 'E02',
      index: 2,
      code: 'MAP-NOVUS-04',
      title: 'Bản đồ chuyên môn hóa Novus',
      category: 'Bản đồ kinh tế',
      lines: [
        'Vùng Đồng ruộng: lúa và rau',
        'Lò rèn Doran: máy móc, công cụ',
        'Tiệm Mara: bánh mì',
        'Cảng Novus: vận chuyển quốc tế',
      ],
      highlight: 'Không khu vực nào tự sản xuất đầy đủ mọi thứ mình cần.',
    },
    lifelines: {
      eliminate: ['B', 'D'],
      poll: { A: 72, B: 14, C: 9, D: 5 },
      npc: {
        id: 'mara',
        name: 'Mara',
        role: 'Tiểu thương Novus',
        hint:
          'Tôi biết làm bánh, nhưng không tự trồng lúa hay sửa lò. Hãy chú ý đến việc mỗi người chỉ chuyên làm một loại công việc.',
      },
      theory:
        'Phân công lao động xã hội tạo ra các ngành nghề chuyên môn hóa. Chuyên môn hóa làm tăng khả năng sản xuất, nhưng đồng thời khiến các chủ thể phụ thuộc vào sản phẩm của nhau và phát sinh nhu cầu trao đổi.',
    },
  },
  {
    id: 3,
    stage: 1,
    stageTitle: 'Hàng hóa không đến được với con người',
    coin: 300,
    difficulty: 'Dễ',
    title: 'Sự tách biệt về kinh tế',
    scene:
      'Nira muốn lấy máy cày của Doran. Máy cày thuộc Doran và ông chỉ chuyển giao nó khi nhận được một giá trị tương ứng.',
    prompt:
      'Nira muốn sử dụng máy cày của Doran nhưng phải trao đổi một giá trị tương ứng. Điều này phản ánh điều kiện nào?',
    answers: [
      {
        id: 'A',
        text: 'Sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất',
        feedback:
          'Chính xác. Máy cày thuộc quyền kiểm soát của Doran, còn lúa thuộc Nira. Hai người là các chủ thể độc lập, có lợi ích riêng; muốn nhận sản phẩm của nhau, họ phải trao đổi.',
      },
      {
        id: 'B',
        text: 'Mọi sản phẩm đều do Nhà nước phân phối',
        feedback:
          'Tình huống không mô tả một cơ chế phân phối thống nhất từ cơ quan quản lý. Nira và Doran trực tiếp thỏa thuận với nhau với tư cách hai chủ thể kinh tế độc lập.',
      },
      {
        id: 'C',
        text: 'Người sản xuất không có lợi ích riêng',
        feedback:
          'Chính vì mỗi người có lợi ích riêng nên việc chuyển giao sản phẩm không diễn ra vô điều kiện. Doran cần nhận được một giá trị tương ứng khi trao máy cày hoặc dịch vụ sửa chữa.',
      },
      {
        id: 'D',
        text: 'Không tồn tại quyền sở hữu đối với sản phẩm',
        feedback:
          'Nếu không tồn tại sự tách biệt về quyền sở hữu hoặc quyền kiểm soát, Nira sẽ không phải trao đổi để sử dụng máy cày. Dữ kiện của câu hỏi cho thấy sản phẩm thuộc các chủ thể khác nhau.',
      },
    ],
    correctAnswer: 'A',
    conclusion:
      'Ngoài phân công lao động xã hội, sản xuất hàng hóa còn cần sự tách biệt tương đối về kinh tế giữa các chủ thể. Mỗi chủ thể độc lập trong sản xuất và có lợi ích riêng; sản phẩm của người này không tự động thuộc về người khác, nên việc tiếp cận phải thông qua trao đổi.',
    evidence: {
      id: 'E03',
      index: 3,
      code: 'CTR-ND-35',
      title: 'Hợp đồng sửa cối xay',
      category: 'Hợp đồng trao đổi',
      lines: [
        'Bên cung cấp dịch vụ: Doran',
        'Bên thuê sửa chữa: Nira',
        'Phí sửa chữa: 35 Coin',
        'Thanh toán sau khi lô lúa đầu tiên được bán',
      ],
      highlight: 'Hai chủ thể ký kết độc lập.',
    },
    lifelines: {
      eliminate: ['B', 'C'],
      poll: { A: 68, B: 10, C: 13, D: 9 },
      npc: {
        id: 'auren',
        name: 'Auren',
        role: 'Nhà quản lý',
        hint:
          'Hãy hỏi vì sao Nira không thể tự lấy máy của Doran dù bà ấy đang rất cần. Ai đang có quyền quyết định đối với sản phẩm đó?',
      },
      theory:
        'Sự tách biệt về kinh tế làm cho những người sản xuất trở thành các chủ thể độc lập, có quyền kiểm soát sản phẩm và lợi ích riêng. Vì vậy, sản phẩm của họ đối diện với nhau như những hàng hóa cần được trao đổi.',
    },
  },
  {
    id: 4,
    stage: 1,
    stageTitle: 'Hàng hóa không đến được với con người',
    coin: 500,
    difficulty: 'Dễ',
    title: 'Hai thuộc tính của hàng hóa',
    scene:
      'Một ổ bánh mì có thể dùng làm thức ăn. Đồng thời, nó được bán với một mức giá nhất định tại chợ Novus.',
    prompt: 'Hai thuộc tính cơ bản của hàng hóa là gì?',
    answers: [
      {
        id: 'A',
        text: 'Giá trị sử dụng và giá trị',
        feedback:
          'Chính xác. Giá trị sử dụng phản ánh công dụng của hàng hóa; giá trị phản ánh lao động xã hội của người sản xuất kết tinh trong hàng hóa. Hai thuộc tính cùng tồn tại trong hàng hóa.',
      },
      {
        id: 'B',
        text: 'Giá thành và lợi nhuận',
        feedback:
          'Giá thành và lợi nhuận là những phạm trù liên quan đến hoạt động kinh doanh, không phải hai thuộc tính cơ bản cấu thành hàng hóa theo lý luận giá trị.',
      },
      {
        id: 'C',
        text: 'Cung và cầu',
        feedback:
          'Cung và cầu là các lực lượng tác động đến thị trường và giá cả. Chúng không phải hai thuộc tính nằm trong bản thân một hàng hóa cụ thể.',
      },
      {
        id: 'D',
        text: 'Lao động và tiền lương',
        feedback:
          'Lao động có quan hệ với nguồn gốc giá trị, còn tiền lương gắn với hàng hóa sức lao động. Hai khái niệm này không tạo thành cặp thuộc tính cơ bản của mọi hàng hóa.',
      },
    ],
    correctAnswer: 'A',
    conclusion:
      'Giá trị sử dụng là công dụng của hàng hóa, khả năng đáp ứng nhu cầu. Giá trị là lao động xã hội của người sản xuất hàng hóa kết tinh trong hàng hóa. Người mua quan tâm đến giá trị sử dụng; còn việc trao đổi hàng hóa phản ánh quan hệ giá trị giữa những người sản xuất.',
    evidence: {
      id: 'E04',
      index: 4,
      code: 'SCAN-BREAD-02',
      title: 'Quét ổ bánh mì',
      category: 'Phân tích hàng hóa',
      lines: [
        'Economic Lens hiện hai lớp',
        'Công dụng: cung cấp thực phẩm',
        'Dấu vết lao động: trồng lúa, xay bột',
        'Dấu vết lao động: nướng bánh, vận chuyển',
      ],
      highlight: 'Một hàng hóa — hai thuộc tính cùng tồn tại.',
    },
    lifelines: {
      eliminate: ['B', 'D'],
      poll: { A: 77, B: 11, C: 8, D: 4 },
      npc: {
        id: 'mara',
        name: 'Mara',
        role: 'Tiểu thương Novus',
        hint:
          'Khách hàng mua bánh vì có thể ăn được. Nhưng để bánh xuất hiện ở quầy, nhiều lao động đã được thực hiện. Hãy tìm cặp khái niệm phản ánh hai mặt đó.',
      },
      theory:
        'Giá trị sử dụng thuộc về công dụng của vật phẩm và chỉ được thực hiện khi sử dụng. Giá trị phản ánh lao động xã hội kết tinh trong hàng hóa và biểu hiện ra bên ngoài thông qua quan hệ trao đổi.',
    },
  },
  {
    id: 5,
    stage: 1,
    stageTitle: 'Hàng hóa không đến được với con người',
    coin: 1000,
    difficulty: 'Trung bình',
    title: 'Khan hiếm giả và giá cả',
    scene:
      'Kho lúa vẫn đầy nhưng các tuyến vận chuyển độc lập bị khóa. Một thông báo giả về mất mùa khiến người dân mua nhiều hơn nhu cầu.',
    prompt:
      'Kho lúa còn đầy, vận tải độc lập bị khóa và tin đồn mất mùa khiến người dân tích trữ. Nhận định nào đầy đủ nhất?',
    answers: [
      {
        id: 'A',
        text: 'Giá tăng chỉ vì người bán tự ý tăng giá',
        feedback:
          'Người bán có thể điều chỉnh giá, nhưng tình huống cho thấy nguyên nhân rộng hơn: hàng bị chặn khỏi thị trường, người mua tăng tích trữ và thông tin sai làm thay đổi hành vi của nhiều chủ thể.',
      },
      {
        id: 'B',
        text: 'Giá cả không liên quan đến cung–cầu và hành vi thị trường',
        feedback:
          'Dữ kiện cho thấy lượng hàng thực sự đưa ra chợ giảm, trong khi lượng mua dự phòng tăng. Đây chính là sự thay đổi của cung và cầu trên thị trường, dù lượng hàng vật chất trong kho chưa biến mất.',
      },
      {
        id: 'C',
        text: 'Dòng cung bị hạn chế, thông tin sai làm cầu tăng và thị trường bị thao túng',
        feedback:
          'Chính xác. Nguồn hàng tiếp cận thị trường bị hạn chế, tin đồn làm nhu cầu mua tăng bất thường và một chủ thể kiểm soát vận chuyển. Giá tăng là kết quả của nhiều quan hệ bị bóp méo cùng lúc.',
      },
      {
        id: 'D',
        text: 'Chỉ cần còn hàng trong kho thì giá không thể tăng',
        feedback:
          'Giá không phụ thuộc vào tổng số hàng đang tồn tại ở mọi nơi, mà còn phụ thuộc lượng hàng thực sự được đưa ra thị trường. Hàng nằm trong kho bị khóa không thể đáp ứng nhu cầu hiện tại.',
      },
    ],
    correctAnswer: 'C',
    conclusion:
      'Giá cả thị trường chịu tác động của giá trị, cung–cầu, cạnh tranh, sức mua của tiền và hành vi các chủ thể. Trong tình huống Novus, hàng hóa không biến mất nhưng lượng cung có khả năng tiếp cận thị trường giảm; đồng thời tin sai làm cầu tích trữ tăng, tạo điều kiện cho thao túng giá.',
    evidence: {
      id: 'E05',
      index: 5,
      code: 'SCARCITY-X72',
      title: 'Hồ sơ Khan hiếm giả',
      category: 'Báo cáo tuyệt mật',
      lines: [
        'Kho trung tâm còn 72% lương thực',
        '80% giấy phép vận tải độc lập bị hủy',
        '91% tin nhắn mất mùa phát từ một máy chủ',
      ],
      highlight: 'Nguồn cung vật chất còn tồn tại nhưng đường ra thị trường bị khóa.',
    },
    lifelines: {
      eliminate: ['B', 'D'],
      poll: { A: 20, B: 7, C: 67, D: 6 },
      npc: {
        id: 'mara',
        name: 'Mara',
        role: 'Tiểu thương Novus',
        hint:
          'Hãy phân biệt hàng nằm trong kho với hàng thật sự được đưa ra chợ. Sau đó xem tin đồn đã khiến người mua thay đổi hành vi thế nào.',
      },
      theory:
        'Giá cả thị trường không do một yếu tố duy nhất quyết định. Cung–cầu, cạnh tranh, thông tin và hành vi của các chủ thể có thể khiến giá cả dao động. Việc kiểm soát đường lưu thông cũng có thể làm lượng cung thực tế trên thị trường giảm.',
    },
  },
] as const satisfies readonly Question[]

export const coinLadder = [
  1_000_000,
  500_000,
  250_000,
  125_000,
  64_000,
  32_000,
  16_000,
  8_000,
  4_000,
  2_000,
  1_000,
  500,
  300,
  200,
  100,
]
