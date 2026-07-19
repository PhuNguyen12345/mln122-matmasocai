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
  {
    id: 6,
    stage: 2,
    stageTitle: 'Ai tạo ra giá trị?',
    coin: 2000,
    difficulty: 'Dễ',
    title: 'Người lao động bán gì?',
    scene:
      'Lyra ký hợp đồng làm việc 8 giờ mỗi ngày. Cô không bán bản thân và cũng không sở hữu sản phẩm cuối cùng của nhà máy.',
    prompt: 'Trong hợp đồng lao động, Lyra bán cho chủ doanh nghiệp điều gì?',
    answers: [
      {
        id: 'A',
        text: 'Bản thân người lao động',
        feedback:
          'Người lao động tự do không bán bản thân mình như một vật sở hữu. Lyra chỉ chuyển quyền sử dụng năng lực lao động của mình trong thời gian và điều kiện được xác lập trong hợp đồng.',
      },
      {
        id: 'B',
        text: 'Quyền sử dụng sức lao động trong một thời gian nhất định',
        feedback:
          'Chính xác. Lyra bán sức lao động, tức khả năng thể chất và tinh thần được sử dụng trong quá trình sản xuất, trong một khoảng thời gian nhất định để nhận tiền công.',
      },
      {
        id: 'C',
        text: 'Toàn bộ sản phẩm của nhà máy',
        feedback:
          'Sản phẩm được tạo ra trong nhà máy thuộc quyền định đoạt của chủ sở hữu tư liệu sản xuất theo quan hệ đã thiết lập. Lyra không bán sản phẩm mà cô chưa sở hữu.',
      },
      {
        id: 'D',
        text: 'Máy móc mà cô sử dụng',
        feedback:
          'Máy móc thuộc nhà máy và chỉ là tư liệu lao động mà Lyra sử dụng. Cô không sở hữu máy, nên không thể bán nó cho doanh nghiệp.',
      },
    ],
    correctAnswer: 'B',
    conclusion:
      'Trong quan hệ lao động làm thuê, người lao động bán hàng hóa sức lao động chứ không bán bản thân. Người sử dụng lao động mua quyền sử dụng năng lực lao động trong một thời gian nhất định; tiền công là hình thức biểu hiện bằng tiền của giá trị hàng hóa sức lao động.',
    evidence: {
      id: 'E06',
      index: 6,
      code: 'LABOR-C08',
      title: 'Hợp đồng của Lyra',
      category: 'Hồ sơ lao động',
      lines: [
        'Thời gian cung cấp sức lao động: 8 giờ/ngày',
        'Mức tiền công: 100 Coin/ngày',
        'Tư liệu sản xuất: thuộc Novus Steel',
      ],
      highlight: 'Quyền sử dụng sức lao động được giới hạn trong ca làm việc.',
    },
    lifelines: {
      eliminate: ['C', 'D'],
      poll: { A: 18, B: 65, C: 11, D: 6 },
      npc: {
        id: 'lyra',
        name: 'Lyra',
        role: 'Công nhân Novus Steel',
        hint:
          'Tôi vẫn là một con người tự do sau khi ký hợp đồng. Điều nhà máy được quyền sử dụng chỉ tồn tại trong ca làm việc.',
      },
      theory:
        'Sức lao động là toàn bộ năng lực thể chất và tinh thần tồn tại trong con người, được vận dụng trong sản xuất. Người lao động tự do bán quyền sử dụng sức lao động trong một thời hạn, chứ không bán bản thân mình.',
    },
  },
  {
    id: 7,
    stage: 2,
    stageTitle: 'Ai tạo ra giá trị?',
    coin: 4000,
    difficulty: 'Trung bình',
    title: 'Điều kiện để sức lao động trở thành hàng hóa',
    scene:
      'Hồ sơ tuyển dụng cho thấy phần lớn công nhân Novus tự do ký hợp đồng, nhưng không sở hữu tư liệu để tự tổ chức sản xuất.',
    prompt: 'Điều kiện nào cần thiết để sức lao động trở thành hàng hóa?',
    answers: [
      {
        id: 'A',
        text: 'Người lao động tự do về thân thể và không có đủ tư liệu sản xuất cần thiết',
        feedback:
          'Chính xác. Người lao động phải có quyền định đoạt sức lao động của mình, đồng thời không có đủ tư liệu sản xuất và sinh hoạt để tự tổ chức sản xuất, nên phải bán sức lao động.',
      },
      {
        id: 'B',
        text: 'Người lao động phải sở hữu toàn bộ nhà máy',
        feedback:
          'Nếu người lao động sở hữu đầy đủ nhà máy và tư liệu sản xuất, họ có thể tự tổ chức sản xuất thay vì phải bán sức lao động cho một chủ thể khác.',
      },
      {
        id: 'C',
        text: 'Mọi người lao động nhận mức tiền công giống nhau',
        feedback:
          'Mức tiền công có thể khác nhau tùy trình độ, ngành nghề và điều kiện. Việc mọi người nhận lương bằng nhau không phải điều kiện làm sức lao động trở thành hàng hóa.',
      },
      {
        id: 'D',
        text: 'Sản phẩm phải bán cao hơn giá trị',
        feedback:
          'Việc giá bán sản phẩm cao hay thấp không quyết định tư cách hàng hóa của sức lao động. Câu hỏi liên quan đến địa vị kinh tế và quyền tự do của người lao động.',
      },
    ],
    correctAnswer: 'A',
    conclusion:
      'Sức lao động trở thành hàng hóa khi người lao động vừa tự do về thân thể, có khả năng định đoạt sức lao động, vừa không có đủ tư liệu sản xuất để tự kết hợp với sức lao động của mình. Vì thế, họ phải bán sức lao động để có thu nhập và duy trì cuộc sống.',
    evidence: {
      id: 'E07',
      index: 7,
      code: 'WORKFORCE-86',
      title: 'Hồ sơ tuyển dụng Novus Steel',
      category: 'Dữ liệu nhân lực',
      lines: [
        '86% công nhân không sở hữu tư liệu sản xuất',
        '92% thu nhập hộ gia đình đến từ tiền công',
        'Người lao động tự ký hoặc chấm dứt hợp đồng theo quy định',
      ],
      highlight: 'Tự do về thân thể nhưng không đủ tư liệu sản xuất.',
    },
    lifelines: {
      eliminate: ['C', 'D'],
      poll: { A: 60, B: 20, C: 13, D: 7 },
      npc: {
        id: 'lyra',
        name: 'Lyra',
        role: 'Công nhân Novus Steel',
        hint:
          'Tôi có quyền chọn nơi làm việc, nhưng nếu không bán sức lao động thì gia đình tôi không có nguồn thu nhập ổn định.',
      },
      theory:
        'Hai điều kiện cơ bản là người lao động tự do định đoạt sức lao động và không sở hữu đủ tư liệu sản xuất cần thiết. Thiếu một trong hai điều kiện, sức lao động không tồn tại như một hàng hóa theo đúng nghĩa.',
    },
  },
  {
    id: 8,
    stage: 2,
    stageTitle: 'Ai tạo ra giá trị?',
    coin: 8000,
    difficulty: 'Trung bình',
    title: 'Giá trị sử dụng đặc biệt của sức lao động',
    scene:
      'Nhà máy mua nguyên liệu, máy móc và sức lao động. Sau sản xuất, tổng giá trị sản phẩm lớn hơn toàn bộ giá trị ứng trước.',
    prompt: 'Giá trị sử dụng đặc biệt của hàng hóa sức lao động là gì?',
    answers: [
      {
        id: 'A',
        text: 'Có thể cất giữ vô thời hạn',
        feedback:
          'Sức lao động gắn với con người và cần được duy trì, tái tạo hằng ngày. Thời gian lao động không sử dụng hôm nay không thể đơn giản cất kho để dùng nguyên vẹn vào một thời điểm bất kỳ.',
      },
      {
        id: 'B',
        text: 'Có khả năng tạo ra giá trị mới lớn hơn giá trị của bản thân nó',
        feedback:
          'Chính xác. Khi được sử dụng trong sản xuất, sức lao động có thể tạo ra lượng giá trị mới lớn hơn giá trị cần thiết để duy trì và tái sản xuất chính sức lao động đó.',
      },
      {
        id: 'C',
        text: 'Không cần tư liệu sản xuất vẫn tạo ra sản phẩm',
        feedback:
          'Sức lao động chỉ tạo ra sản phẩm khi kết hợp với tư liệu sản xuất như nguyên liệu, công cụ và máy móc. Không thể tách lao động khỏi các điều kiện vật chất của sản xuất.',
      },
      {
        id: 'D',
        text: 'Luôn được bán đúng bằng giá trị',
        feedback:
          'Việc hàng hóa được bán đúng, cao hay thấp hơn giá trị không phải giá trị sử dụng đặc biệt của sức lao động. Điểm đặc biệt nằm trong quá trình tiêu dùng nó để sản xuất.',
      },
    ],
    correctAnswer: 'B',
    conclusion:
      'Giá trị sử dụng đặc biệt của sức lao động là khả năng tạo ra giá trị mới, trong đó lượng giá trị mới có thể lớn hơn giá trị của bản thân sức lao động. Phần dôi ra ngoài giá trị sức lao động là cơ sở hình thành giá trị thặng dư.',
    evidence: {
      id: 'E08',
      index: 8,
      code: 'VALUE-SCAN-240',
      title: 'Bản quét quá trình sản xuất',
      category: 'Phân tích giá trị',
      lines: [
        'Nguyên liệu chuyển giá trị vào sản phẩm',
        'Máy móc chuyển phần giá trị hao mòn',
        'Lao động sống tạo ra giá trị mới',
      ],
      highlight: 'Giá trị mới: 240 Coin · Giá trị sức lao động: 100 Coin.',
    },
    lifelines: {
      eliminate: ['A', 'D'],
      poll: { A: 7, B: 61, C: 23, D: 9 },
      npc: {
        id: 'lyra',
        name: 'Lyra',
        role: 'Công nhân Novus Steel',
        hint:
          'Hãy xem điều gì xuất hiện thêm sau khi sức lao động được sử dụng cùng nguyên liệu và máy móc.',
      },
      theory:
        'Giá trị sử dụng của sức lao động chỉ được thực hiện trong lao động. Khi được tiêu dùng, nó không chỉ tái tạo giá trị của bản thân mà còn có khả năng tạo ra một lượng giá trị mới lớn hơn.',
    },
  },
  {
    id: 9,
    stage: 2,
    stageTitle: 'Ai tạo ra giá trị?',
    coin: 16000,
    difficulty: 'Trung bình',
    title: 'Thời gian lao động thặng dư',
    scene:
      'Trong ca 8 giờ, Lyra đã tạo đủ lượng giá trị tương đương tiền công sau 4 giờ. Máy vẫn tiếp tục chạy trong 4 giờ còn lại.',
    prompt:
      'Trong ngày lao động 8 giờ, sau 4 giờ người lao động đã tạo ra giá trị tương đương giá trị sức lao động. Bốn giờ còn lại gọi là gì?',
    answers: [
      {
        id: 'A',
        text: 'Thời gian lao động cá biệt',
        feedback:
          'Thời gian lao động cá biệt nói đến hao phí lao động riêng của một người sản xuất so với điều kiện xã hội. Câu hỏi đang chia ngày lao động thành phần tái tạo giá trị sức lao động và phần dôi ra.',
      },
      {
        id: 'B',
        text: 'Thời gian lao động tất yếu',
        feedback:
          'Thời gian lao động tất yếu là bốn giờ đầu, khi người lao động tạo ra lượng giá trị tương đương giá trị sức lao động. Câu hỏi hỏi về phần thời gian sau mốc đó.',
      },
      {
        id: 'C',
        text: 'Thời gian lao động thặng dư',
        feedback:
          'Chính xác. Trong bốn giờ sau, người lao động vẫn tiếp tục tạo ra giá trị nhưng phần giá trị này vượt quá giá trị sức lao động và trở thành giá trị thặng dư.',
      },
      {
        id: 'D',
        text: 'Thời gian ngừng sản xuất',
        feedback:
          'Nhà máy vẫn hoạt động và người lao động tiếp tục tạo sản phẩm trong bốn giờ sau. Đây không phải thời gian ngừng sản xuất hay nghỉ ngơi.',
      },
    ],
    correctAnswer: 'C',
    conclusion:
      'Ngày lao động được chia thành thời gian lao động tất yếu và thời gian lao động thặng dư. Trong thời gian tất yếu, người lao động tạo ra giá trị tương đương giá trị sức lao động; trong thời gian thặng dư, họ tạo ra phần giá trị mới dôi ra cho chủ sở hữu tư liệu sản xuất.',
    evidence: {
      id: 'E09',
      index: 9,
      code: 'SHIFT-04/04',
      title: 'Đồng hồ ca làm',
      category: 'Nhật ký sản xuất',
      lines: [
        'Giờ 1–4: tái tạo giá trị sức lao động',
        'Giờ 5–8: tạo giá trị thặng dư',
        'Tổng thời gian lao động: 8 giờ',
      ],
      highlight: 'Bốn giờ thặng dư bắt đầu sau khi giá trị sức lao động đã được tái tạo.',
    },
    lifelines: {
      eliminate: ['A', 'D'],
      poll: { A: 10, B: 29, C: 56, D: 5 },
      npc: {
        id: 'lyra',
        name: 'Lyra',
        role: 'Công nhân Novus Steel',
        hint:
          'Bốn giờ đầu đã tạo đủ lượng giá trị tương đương tiền công. Nhưng máy vẫn chạy thêm bốn giờ nữa.',
      },
      theory:
        'Thời gian lao động tất yếu là phần ngày lao động tái tạo giá trị sức lao động. Thời gian lao động thặng dư là phần vượt quá giới hạn đó, trong đó người lao động tạo ra giá trị thặng dư.',
    },
  },
  {
    id: 10,
    stage: 2,
    stageTitle: 'Ai tạo ra giá trị?',
    coin: 32000,
    difficulty: 'Trung bình',
    title: 'Giá trị thặng dư tuyệt đối',
    scene:
      'Sổ chấm công bí mật cho thấy ngày lao động tăng từ 8 lên 10 giờ, trong khi thời gian lao động tất yếu và tiền công đều không đổi.',
    prompt:
      'Ngày lao động tăng từ 8 lên 10 giờ, thời gian lao động tất yếu vẫn là 4 giờ. Đây là phương pháp nào?',
    answers: [
      {
        id: 'A',
        text: 'Giá trị thặng dư tương đối',
        feedback:
          'Giá trị thặng dư tương đối đòi hỏi thời gian lao động tất yếu được rút ngắn trong khi ngày lao động không đổi. Ở đây, thời gian tất yếu vẫn là 4 giờ và tổng ngày lao động bị kéo dài.',
      },
      {
        id: 'B',
        text: 'Giá trị thặng dư tuyệt đối',
        feedback:
          'Chính xác. Khi ngày lao động được kéo dài từ 8 lên 10 giờ, thời gian lao động thặng dư tăng từ 4 lên 6 giờ. Đây là phương pháp sản xuất giá trị thặng dư tuyệt đối.',
      },
      {
        id: 'C',
        text: 'Giá trị thặng dư siêu ngạch do giá bán tăng',
        feedback:
          'Việc giá bán thay đổi không phải dữ kiện của tình huống. Câu hỏi chỉ mô tả sự thay đổi độ dài ngày lao động và phần thời gian lao động thặng dư.',
      },
      {
        id: 'D',
        text: 'Không tạo thêm giá trị thặng dư',
        feedback:
          'Thời gian lao động thặng dư tăng thêm hai giờ, nên lượng giá trị thặng dư được tạo ra có khả năng tăng nếu các điều kiện khác không đổi.',
      },
    ],
    correctAnswer: 'B',
    conclusion:
      'Giá trị thặng dư tuyệt đối được tạo ra bằng cách kéo dài ngày lao động vượt quá thời gian lao động tất yếu, hoặc tăng cường độ lao động trong những giới hạn nhất định. Trong tình huống, ngày lao động tăng hai giờ còn thời gian tất yếu giữ nguyên, nên toàn bộ phần tăng thêm thuộc thời gian lao động thặng dư.',
    evidence: {
      id: 'E10',
      index: 10,
      code: 'TIMESHEET-X10',
      title: 'Sổ chấm công bí mật',
      category: 'Chứng cứ nội bộ',
      lines: [
        'Ca hợp đồng: 8 giờ',
        'Ca thực tế: 10 giờ',
        'Thời gian tất yếu: 4 giờ · Tiền công không đổi',
      ],
      highlight: 'Thời gian lao động thặng dư tăng từ 4 lên 6 giờ.',
    },
    lifelines: {
      eliminate: ['C', 'D'],
      poll: { A: 33, B: 53, C: 9, D: 5 },
      npc: {
        id: 'lyra',
        name: 'Lyra',
        role: 'Công nhân Novus Steel',
        hint:
          'Không có dữ kiện nào cho thấy bốn giờ đầu được rút ngắn. Chúng tôi chỉ bị giữ lại nhà máy lâu hơn.',
      },
      theory:
        'Giá trị thặng dư tuyệt đối phát sinh khi kéo dài ngày lao động vượt quá thời gian lao động tất yếu. Điểm nhận diện là độ dài ngày lao động tăng, trong khi thời gian lao động tất yếu chưa giảm.',
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
