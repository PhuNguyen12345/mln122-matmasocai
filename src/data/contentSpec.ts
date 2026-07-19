// Generated from V1.0 - Content Spec Updated.docx.
// Keep editorial content in this data layer; game behavior belongs elsewhere.
export const contentSpecQuestions = [
  {
    "id": "Q01",
    "chapter": 1,
    "reward": 100,
    "difficulty": "EASY_ANALYSIS",
    "topic": "Hàng hóa",
    "learningObjective": "Phân biệt sản phẩm lao động, vật có ích và hàng hóa dựa trên mục đích trao đổi.",
    "context": "Nira thu hoạch 800 bao lúa: 100 bao dùng cho gia đình, 50 bao giữ làm giống và 650 bao chuyển đến chợ để bán.",
    "question": "Nhận định nào chính xác nhất?",
    "answers": {
      "A": {
        "text": "Cả 800 bao đều là hàng hóa vì đều là sản phẩm lao động.",
        "correct": false,
        "feedback": "Chưa chính xác. Sản phẩm của lao động chưa tự động là hàng hóa. Một phần lúa được Nira sử dụng trực tiếp hoặc giữ làm giống nên không đi vào quan hệ trao đổi."
      },
      "B": {
        "text": "Chỉ 650 bao là hàng hóa vì được đưa ra trao đổi, mua bán.",
        "correct": true,
        "feedback": "Chính xác. Phần lúa được sản xuất và đưa ra thị trường mang hình thái hàng hóa; phần dùng trực tiếp hoặc làm giống không phải hàng hóa trong tình huống này."
      },
      "C": {
        "text": "750 bao là hàng hóa vì đều phục vụ nhu cầu con người.",
        "correct": false,
        "feedback": "Khả năng đáp ứng nhu cầu chỉ cho thấy giá trị sử dụng. Một vật có ích chưa đủ để trở thành hàng hóa nếu nó không được đưa vào trao đổi, mua bán."
      },
      "D": {
        "text": "Chỉ số lúa đã bán thành công và nhận tiền mới trở thành hàng hóa.",
        "correct": false,
        "feedback": "Hàng hóa không chỉ hình thành sau khi giao dịch hoàn tất. Sản phẩm đã được tạo ra nhằm trao đổi và đưa ra thị trường đã mang hình thái hàng hóa."
      }
    },
    "conclusion": "Hàng hóa là sản phẩm của lao động có khả năng đáp ứng nhu cầu thông qua trao đổi, mua bán. Mục đích sử dụng và quan hệ xã hội mà sản phẩm tham gia quyết định nó có mang hình thái hàng hóa hay không.",
    "fiftyFiftyEliminated": [
      "C",
      "D"
    ],
    "poll": {
      "A": 18,
      "B": 61,
      "C": 14,
      "D": 7,
      "reliability": "HIGH"
    },
    "recommendedNpc": "mara",
    "npcHints": {
      "mara": "Đừng chỉ nhìn xem lúa có ích hay không. Hãy xem phần nào được gia đình dùng trực tiếp và phần nào được đưa ra để đổi lấy giá trị khác.",
      "lyra": "Hãy theo dõi đích đến của từng phần lúa. Không phải sản phẩm nào được làm ra cũng bước vào thị trường.",
      "varen": "Việc sản phẩm đã bán thành công hay chưa không phải điểm duy nhất. Hãy xem nó được sản xuất cho tiêu dùng trực tiếp hay để trao đổi.",
      "auren": "Hãy phân biệt tính chất vật chất của lúa với quan hệ kinh tế mà từng phần lúa tham gia."
    },
    "theoryFile": "Một sản phẩm có ích chưa chắc là hàng hóa. Sản phẩm mang hình thái hàng hóa khi được tạo ra nhằm trao đổi hoặc mua bán. Cùng một loại sản phẩm có thể là hàng hóa trong trường hợp này nhưng không phải hàng hóa trong trường hợp khác.",
    "evidence": {
      "id": "E01",
      "title": "Phiếu phân bổ vụ mùa",
      "type": "WAREHOUSE_RECORD",
      "content": [
        "Tổng thu hoạch: 800 bao",
        "Tiêu dùng gia đình: 100 bao",
        "Giữ làm giống: 50 bao",
        "Đưa ra chợ: 650 bao"
      ],
      "highlight": "Đưa ra chợ: 650 bao"
    },
    "moneyDialogue": {
      "before": "Cùng được tạo ra trong một vụ mùa, nhưng không phải mọi bao lúa đều tham gia vào cùng một quan hệ kinh tế.",
      "correct": "Chính xác. Tính có ích chưa đủ; mục đích trao đổi mới là dấu hiệu quyết định trong hồ sơ này.",
      "wrong": "Bạn đang đồng nhất sản phẩm lao động hoặc vật có ích với hàng hóa. Hãy kiểm tra mục đích sử dụng của từng phần lúa.",
      "unlock": "Đã mở khóa Phiếu phân bổ vụ mùa."
    }
  },
  {
    "id": "Q02",
    "chapter": 1,
    "reward": 200,
    "difficulty": "EASY_ANALYSIS",
    "topic": "Điều kiện sản xuất hàng hóa",
    "learningObjective": "Nhận diện vai trò của sự tách biệt kinh tế giữa các chủ thể.",
    "context": "Nira chuyên trồng lúa, Doran chuyên chế tạo công cụ. Hai người sở hữu sản phẩm riêng và chỉ chuyển giao cho nhau sau khi đạt thỏa thuận.",
    "question": "Yếu tố nào, nếu bị loại bỏ, sẽ khiến quan hệ giữa họ không còn là trao đổi hàng hóa giữa hai chủ thể độc lập?",
    "answers": {
      "A": {
        "text": "Họ dùng tiền thay vì trao đổi trực tiếp.",
        "correct": false,
        "feedback": "Tiền chỉ là hình thức trung gian của trao đổi. Dù đổi trực tiếp hay dùng tiền, quan hệ hàng hóa vẫn có thể tồn tại nếu các chủ thể độc lập."
      },
      "B": {
        "text": "Sản phẩm của cả hai được một chủ thể chung sở hữu và phân phối nội bộ.",
        "correct": true,
        "feedback": "Chính xác. Khi sản phẩm không còn thuộc các chủ thể độc lập mà được một chủ thể chung phân phối, cơ sở của trao đổi hàng hóa giữa Nira và Doran không còn như trước."
      },
      "C": {
        "text": "Năng suất của Doran cao hơn năng suất của Nira.",
        "correct": false,
        "feedback": "Chênh lệch năng suất có thể ảnh hưởng kết quả sản xuất nhưng không xóa bỏ sự độc lập kinh tế hay quyền định đoạt sản phẩm."
      },
      "D": {
        "text": "Hai người sinh sống trong cùng một khu vực.",
        "correct": false,
        "feedback": "Khoảng cách địa lý không quyết định trực tiếp việc họ có phải là hai chủ thể kinh tế độc lập hay không."
      }
    },
    "conclusion": "Sản xuất hàng hóa không chỉ đòi hỏi phân công lao động mà còn cần sự tách biệt tương đối về kinh tế. Mỗi chủ thể có quyền kiểm soát sản phẩm và lợi ích riêng, nên sản phẩm của họ phải được chuyển giao thông qua trao đổi.",
    "fiftyFiftyEliminated": [
      "A",
      "D"
    ],
    "poll": {
      "A": 15,
      "B": 62,
      "C": 16,
      "D": 7,
      "reliability": "HIGH"
    },
    "recommendedNpc": "auren",
    "npcHints": {
      "mara": "Hãy xem việc thanh toán bằng tiền có thật sự quyết định hai người còn độc lập hay không.",
      "lyra": "Điểm cần tìm không phải ai làm việc hiệu quả hơn, mà là ai có quyền quyết định đối với sản phẩm.",
      "varen": "Nếu tất cả thuộc cùng một chủ sở hữu, việc chuyển hàng có thể chỉ là điều chuyển nội bộ.",
      "auren": "Hãy xem ai có quyền định đoạt lúa và công cụ. Khi quyền đó không còn thuộc hai chủ thể riêng biệt, quan hệ trao đổi thay đổi thế nào?"
    },
    "theoryFile": "Sản xuất hàng hóa cần phân công lao động xã hội và sự tách biệt tương đối về kinh tế. Sự tách biệt khiến các chủ thể độc lập về lợi ích và quyền định đoạt sản phẩm; muốn sử dụng sản phẩm của nhau, họ phải trao đổi.",
    "evidence": {
      "id": "E02",
      "title": "Hợp đồng trao đổi Nira–Doran",
      "type": "CONTRACT",
      "content": [
        "Bên A: Nira",
        "Bên B: Doran",
        "Đối tượng: sửa máy và thanh toán bằng Coin",
        "Mỗi bên tự quyết định việc ký kết"
      ],
      "highlight": "Mỗi bên tự quyết định việc ký kết"
    },
    "moneyDialogue": {
      "before": "Chuyên môn hóa khiến Nira và Doran cần sản phẩm của nhau. Nhưng chuyên môn hóa chưa phải toàn bộ điều kiện.",
      "correct": "Đã xác nhận. Cơ sở trao đổi thay đổi khi quyền sở hữu và quyền định đoạt không còn tách biệt.",
      "wrong": "Bạn đang tập trung vào hình thức trao đổi hoặc điều kiện kỹ thuật. Hãy quay lại quan hệ sở hữu.",
      "unlock": "Đã mở khóa Hợp đồng trao đổi Nira–Doran."
    }
  },
  {
    "id": "Q03",
    "chapter": 1,
    "reward": 300,
    "difficulty": "MEDIUM",
    "topic": "Lượng giá trị hàng hóa",
    "learningObjective": "Phân biệt thời gian lao động cá biệt và thời gian lao động xã hội cần thiết.",
    "context": "Phần lớn thợ Novus làm một chiếc bàn trong 4 giờ. Do máy móc cũ, Doran cần 7 giờ để tạo chiếc bàn cùng loại và chất lượng.",
    "question": "Khi trao đổi trên thị trường, giá trị chiếc bàn của Doran được quyết định chủ yếu bởi yếu tố nào?",
    "answers": {
      "A": {
        "text": "Toàn bộ 7 giờ lao động cá biệt của Doran.",
        "correct": false,
        "feedback": "Nếu mọi hao phí cá biệt đều được xã hội công nhận, người sản xuất càng chậm càng tạo ra hàng hóa có giá trị lớn. Điều này không phù hợp với quy luật giá trị."
      },
      "B": {
        "text": "Khoảng 4 giờ lao động xã hội cần thiết.",
        "correct": true,
        "feedback": "Chính xác. Giá trị được quyết định bởi thời gian lao động xã hội cần thiết trong điều kiện sản xuất bình thường, với trình độ và cường độ lao động trung bình."
      },
      "C": {
        "text": "Mức lợi nhuận mà Doran mong muốn.",
        "correct": false,
        "feedback": "Mong muốn chủ quan của người bán không quyết định lượng giá trị của hàng hóa. Nó có thể ảnh hưởng mức giá chào bán nhưng không thay thế điều kiện sản xuất xã hội."
      },
      "D": {
        "text": "Số tiền Doran đã chi để sửa máy.",
        "correct": false,
        "feedback": "Chi phí sửa máy có thể ảnh hưởng kết quả kinh doanh cá biệt, nhưng không trực tiếp biến 7 giờ lao động cá biệt thành thời gian lao động xã hội cần thiết."
      }
    },
    "conclusion": "Lượng giá trị hàng hóa được quyết định bởi thời gian lao động xã hội cần thiết, không phải mọi hao phí cá biệt. Người sản xuất có điều kiện lạc hậu phải tự gánh bất lợi nếu hao phí vượt quá mức xã hội.",
    "fiftyFiftyEliminated": [
      "C",
      "D"
    ],
    "poll": {
      "A": 34,
      "B": 52,
      "C": 9,
      "D": 5,
      "reliability": "MEDIUM"
    },
    "recommendedNpc": "varen",
    "npcHints": {
      "mara": "Khách hàng không biết Doran đã mất bao lâu. Họ so chiếc bàn với những sản phẩm cùng loại trên thị trường.",
      "lyra": "Làm lâu hơn không có nghĩa xã hội sẽ tự động công nhận toàn bộ thời gian tăng thêm.",
      "varen": "Một nhà sản xuất không thể làm giá trị tăng chỉ bằng cách làm việc chậm. Hãy xem điều kiện phổ biến của ngành.",
      "auren": "Hãy phân biệt hao phí riêng của Doran với mức hao phí được xã hội thừa nhận."
    },
    "theoryFile": "Thời gian lao động xã hội cần thiết là thời gian cần để sản xuất một hàng hóa trong điều kiện sản xuất bình thường của xã hội, với trình độ thành thạo và cường độ lao động trung bình.",
    "evidence": {
      "id": "E03",
      "title": "Báo cáo thời gian sản xuất bàn",
      "type": "PRODUCTION_REPORT",
      "content": [
        "Thời gian phổ biến: 4 giờ/sản phẩm",
        "Doran: 7 giờ/sản phẩm",
        "Chất lượng sản phẩm: tương đương",
        "Nguyên nhân chậm: máy móc cũ"
      ],
      "highlight": "Thời gian phổ biến: 4 giờ/sản phẩm"
    },
    "moneyDialogue": {
      "before": "Doran đã làm việc thêm ba giờ. Nhưng thị trường có buộc xã hội thanh toán toàn bộ sự chậm trễ cá biệt đó không?",
      "correct": "Chính xác. Hao phí cá biệt chỉ được thừa nhận trong giới hạn lao động xã hội cần thiết.",
      "wrong": "Bạn đang biến một bất lợi cá biệt thành chuẩn mực của toàn xã hội.",
      "unlock": "Đã mở khóa Báo cáo thời gian sản xuất."
    }
  },
  {
    "id": "Q04",
    "chapter": 1,
    "reward": 500,
    "difficulty": "MEDIUM",
    "topic": "Năng suất lao động",
    "learningObjective": "Phân tích quan hệ giữa năng suất, số lượng sản phẩm và giá trị đơn vị.",
    "context": "Một cải tiến giúp Mara làm 20 ổ bánh trong một giờ thay vì 10 ổ. Độ dài và cường độ giờ lao động không đổi.",
    "question": "Nhận định nào phù hợp nhất?",
    "answers": {
      "A": {
        "text": "Giá trị mỗi ổ có xu hướng giảm vì thời gian lao động xã hội cần thiết cho một ổ giảm.",
        "correct": true,
        "feedback": "Chính xác. Cùng một lượng lao động được phân bổ vào nhiều sản phẩm hơn, nên lượng lao động kết tinh trong mỗi đơn vị giảm."
      },
      "B": {
        "text": "Giá trị mỗi ổ tăng gấp đôi vì số lượng sản phẩm tăng.",
        "correct": false,
        "feedback": "Số lượng giá trị sử dụng tăng không đồng nghĩa giá trị của mỗi đơn vị tăng. Trong trường hợp này, mỗi ổ chứa ít thời gian lao động hơn."
      },
      "C": {
        "text": "Tổng giá trị mới tạo ra trong một giờ nhất thiết tăng gấp đôi.",
        "correct": false,
        "feedback": "Khi cường độ và thời gian lao động không đổi, năng suất tăng chủ yếu làm tăng số lượng sản phẩm và giảm giá trị đơn vị, không nhất thiết làm tổng giá trị mới tăng gấp đôi."
      },
      "D": {
        "text": "Giá trị sử dụng của bánh mất đi vì bánh được sản xuất nhanh hơn.",
        "correct": false,
        "feedback": "Bánh vẫn có công dụng làm thực phẩm. Việc sản xuất nhanh hơn không làm mất giá trị sử dụng."
      }
    },
    "conclusion": "Năng suất lao động tăng làm số lượng sản phẩm trong cùng thời gian tăng và giá trị của mỗi đơn vị có xu hướng giảm. Không được đồng nhất lượng sản phẩm vật chất với lượng giá trị mới.",
    "fiftyFiftyEliminated": [
      "B",
      "D"
    ],
    "poll": {
      "A": 49,
      "B": 18,
      "C": 28,
      "D": 5,
      "reliability": "MEDIUM"
    },
    "recommendedNpc": "varen",
    "npcHints": {
      "mara": "Một giờ vẫn là một giờ, nhưng số ổ bánh đã tăng gấp đôi.",
      "lyra": "Hãy xem lượng lao động trong một giờ đang được chia cho 10 hay 20 sản phẩm.",
      "varen": "Đừng đồng nhất số sản phẩm tăng với tổng giá trị tăng. Cường độ và thời gian lao động không đổi.",
      "auren": "Hãy tách ba đại lượng: số lượng sản phẩm, giá trị mỗi đơn vị và tổng giá trị trong cùng một thời gian."
    },
    "theoryFile": "Năng suất lao động tăng làm giảm thời gian lao động cần thiết cho một đơn vị hàng hóa. Trong cùng một thời gian, số lượng giá trị sử dụng tăng, còn giá trị của từng đơn vị giảm nếu các điều kiện khác không đổi.",
    "evidence": {
      "id": "E04",
      "title": "Báo cáo cải tiến lò bánh",
      "type": "PRODUCTIVITY_REPORT",
      "content": [
        "Trước cải tiến: 10 ổ/giờ",
        "Sau cải tiến: 20 ổ/giờ",
        "Thời gian lao động: không đổi",
        "Cường độ lao động: không đổi"
      ],
      "highlight": "20 ổ trong cùng một giờ lao động"
    },
    "moneyDialogue": {
      "before": "Năng suất tăng gấp đôi, nhưng một giờ lao động vẫn chỉ kéo dài một giờ.",
      "correct": "Phân tích chính xác. Cùng lượng lao động được phân bổ cho nhiều đơn vị hàng hóa hơn.",
      "wrong": "Bạn đang đồng nhất số lượng giá trị sử dụng với lượng giá trị.",
      "unlock": "Đã mở khóa Báo cáo cải tiến lò bánh."
    }
  },
  {
    "id": "Q05",
    "chapter": 1,
    "reward": 1000,
    "difficulty": "MEDIUM",
    "topic": "Giá trị và giá cả",
    "learningObjective": "Phân biệt giá trị hàng hóa với biến động giá cả thị trường.",
    "context": "Hao phí lao động để sản xuất bánh gần như không đổi. Tuy nhiên, vận tải bị khóa làm lượng bánh ra chợ giảm, còn tin đồn khiến người dân tích trữ.",
    "question": "Điều gì có khả năng xảy ra trong ngắn hạn?",
    "answers": {
      "A": {
        "text": "Giá cả thị trường có thể tăng cao hơn giá trị do cung giảm và cầu tăng.",
        "correct": true,
        "feedback": "Chính xác. Giá cả có thể dao động quanh giá trị dưới tác động của cung, cầu, cạnh tranh và thông tin."
      },
      "B": {
        "text": "Giá trị của bánh tự động tăng đúng bằng mức tăng giá cả.",
        "correct": false,
        "feedback": "Giá trị và giá cả không đồng nhất. Giá tăng do điều kiện thị trường không có nghĩa lượng lao động xã hội kết tinh trong bánh tăng tương ứng."
      },
      "C": {
        "text": "Giá cả không thể thay đổi vì hao phí lao động không đổi.",
        "correct": false,
        "feedback": "Giá trị là cơ sở của giá cả nhưng giá cả thị trường vẫn dao động do cung–cầu và cạnh tranh."
      },
      "D": {
        "text": "Giá tăng chứng minh người bán tạo thêm giá trị trong lưu thông.",
        "correct": false,
        "feedback": "Lưu thông có thể phân phối lại giá trị giữa các chủ thể nhưng không tự tạo ra giá trị mới cho toàn xã hội."
      }
    },
    "conclusion": "Giá trị là cơ sở của giá cả, nhưng giá cả thị trường có thể cao hoặc thấp hơn giá trị trong những điều kiện nhất định. Khan hiếm giả và thông tin sai có thể làm biến động cung–cầu mà không làm thay đổi tương ứng lượng giá trị của hàng hóa.",
    "fiftyFiftyEliminated": [
      "C",
      "D"
    ],
    "poll": {
      "A": 57,
      "B": 29,
      "C": 8,
      "D": 6,
      "reliability": "MEDIUM"
    },
    "recommendedNpc": "mara",
    "npcHints": {
      "mara": "Tôi vẫn dùng từng ấy bột và thời gian. Điều thay đổi là số bánh tới chợ và số người đang mua.",
      "lyra": "Hãy xem biến động xảy ra trong sản xuất hay trong quá trình hàng hóa đi vào thị trường.",
      "varen": "Giá bán tăng không đồng nghĩa doanh nghiệp đã tạo thêm giá trị trong lưu thông.",
      "auren": "Hãy phân biệt cơ sở giá trị với những yếu tố làm giá cả dao động trong ngắn hạn."
    },
    "theoryFile": "Giá cả là hình thức biểu hiện bằng tiền của giá trị. Giá cả thị trường có thể dao động quanh giá trị dưới tác động của cung–cầu, cạnh tranh và các điều kiện thị trường khác.",
    "evidence": {
      "id": "E05",
      "title": "Hồ sơ Khan hiếm giả",
      "type": "MARKET_DOSSIER",
      "content": [
        "Kho hàng còn 72%",
        "80% giấy phép vận tải độc lập bị hủy",
        "Tin đồn phát từ một máy chủ",
        "Lượng hàng ra chợ giảm 63%"
      ],
      "highlight": "Hàng tồn tại nhưng lượng cung ra thị trường giảm"
    },
    "moneyDialogue": {
      "before": "Dữ liệu sản xuất gần như không đổi, nhưng bảng giá tại khu chợ liên tục tăng.",
      "correct": "Chính xác. Giá trị là cơ sở, còn giá cả có thể dao động do các điều kiện thị trường.",
      "wrong": "Bạn đang đồng nhất giá trị với biểu hiện bằng tiền của nó hoặc cho rằng lưu thông tự tạo ra giá trị.",
      "unlock": "Hồ sơ thị trường đã được giải mã."
    },
    "transitionAfter": {
      "id": "T05",
      "dialogue": "Lương thực không hoàn toàn biến mất. Quyền tiếp cận hàng hóa và thông tin đã bị can thiệp. Nguồn tín hiệu dẫn đến Novus Steel.",
      "nextScene": "FACTORY_GATE"
    }
  },
  {
    "id": "Q06",
    "chapter": 2,
    "reward": 2000,
    "difficulty": "MEDIUM",
    "topic": "Hàng hóa sức lao động",
    "learningObjective": "Nhận diện đồng thời hai điều kiện làm sức lao động trở thành hàng hóa.",
    "context": "Lyra tự do lựa chọn nơi làm việc nhưng không sở hữu máy móc, nguyên liệu hoặc đủ tư liệu sinh hoạt để sống lâu dài mà không đi làm thuê.",
    "question": "Dữ kiện nào trực tiếp giải thích vì sao sức lao động của Lyra trở thành hàng hóa?",
    "answers": {
      "A": {
        "text": "Lyra có kỹ năng vận hành máy.",
        "correct": false,
        "feedback": "Kỹ năng làm tăng khả năng lao động nhưng chưa giải thích vì sao Lyra phải bán sức lao động cho một chủ thể khác."
      },
      "B": {
        "text": "Lyra vừa tự do định đoạt sức lao động, vừa không có đủ tư liệu sản xuất.",
        "correct": true,
        "feedback": "Chính xác. Đây là hai điều kiện cơ bản: người lao động tự do về thân thể nhưng tách khỏi những tư liệu sản xuất cần thiết."
      },
      "C": {
        "text": "Nhà máy sản xuất hàng hóa có lợi nhuận.",
        "correct": false,
        "feedback": "Lợi nhuận của nhà máy không phải điều kiện trực tiếp làm sức lao động của Lyra trở thành hàng hóa."
      },
      "D": {
        "text": "Lyra được trả tiền công bằng Coin.",
        "correct": false,
        "feedback": "Tiền công là hình thức thanh toán sau khi quan hệ mua bán sức lao động đã hình thành, không phải điều kiện gốc."
      }
    },
    "conclusion": "Sức lao động trở thành hàng hóa khi người lao động tự do định đoạt sức lao động và không sở hữu đủ tư liệu sản xuất để tự tổ chức sản xuất, nên phải bán sức lao động để sinh sống.",
    "fiftyFiftyEliminated": [
      "A",
      "C"
    ],
    "poll": {
      "A": 17,
      "B": 55,
      "C": 12,
      "D": 16,
      "reliability": "MEDIUM"
    },
    "recommendedNpc": "lyra",
    "npcHints": {
      "mara": "Tiền công chỉ xuất hiện sau khi hợp đồng được ký. Hãy tìm nguyên nhân khiến Lyra phải tìm người mua sức lao động.",
      "lyra": "Tôi có thể rời nhà máy này, nhưng vẫn phải bán sức lao động ở nơi khác vì không có máy móc và nguyên liệu.",
      "varen": "Kỹ năng là chất lượng của sức lao động, không phải điều kiện khiến nó được đưa ra bán.",
      "auren": "Hãy tìm một phương án phản ánh đồng thời địa vị pháp lý và hoàn cảnh kinh tế của Lyra."
    },
    "theoryFile": "Hai điều kiện cơ bản: người lao động tự do về thân thể, có khả năng định đoạt sức lao động; đồng thời họ không sở hữu đủ tư liệu sản xuất cần thiết, nên phải bán sức lao động để sinh sống.",
    "evidence": {
      "id": "E06",
      "title": "Hồ sơ lao động Lyra",
      "type": "LABOR_PROFILE",
      "content": [
        "Có quyền tự ký và chấm dứt hợp đồng",
        "Không sở hữu tư liệu sản xuất",
        "Thu nhập chính từ tiền công",
        "Có kỹ năng vận hành máy"
      ],
      "highlight": "Tự do nhưng không có đủ tư liệu sản xuất"
    },
    "moneyDialogue": {
      "before": "Lyra không bị sở hữu bởi nhà máy. Nhưng tự do pháp lý chưa giải thích đầy đủ vì sao cô phải bán sức lao động.",
      "correct": "Đã xác nhận đủ hai điều kiện.",
      "wrong": "Dữ kiện bạn chọn liên quan đến lao động nhưng chưa giải thích sự xuất hiện của hàng hóa sức lao động.",
      "unlock": "Đã mở khóa Hồ sơ lao động Lyra."
    }
  },
  {
    "id": "Q07",
    "chapter": 2,
    "reward": 4000,
    "difficulty": "MEDIUM",
    "topic": "Giá trị hàng hóa sức lao động",
    "learningObjective": "Đánh giá giá trị sức lao động từ tổng điều kiện tái sản xuất.",
    "context": "Nhà máy cung cấp bữa ăn trị giá 10 Coin mỗi ngày nhưng cắt trợ cấp nhà ở trị giá 20 Coin. Các điều kiện khác không đổi.",
    "question": "Nhận định nào hợp lý nhất?",
    "answers": {
      "A": {
        "text": "Giá trị sức lao động chỉ phụ thuộc số sản phẩm công nhân tạo ra.",
        "correct": false,
        "feedback": "Số sản phẩm phản ánh kết quả sử dụng sức lao động, không trực tiếp quyết định giá trị của bản thân hàng hóa sức lao động."
      },
      "B": {
        "text": "Cần xét tổng giá trị các tư liệu sinh hoạt cần thiết để tái sản xuất sức lao động.",
        "correct": true,
        "feedback": "Chính xác. Không thể chỉ nhìn bữa ăn miễn phí mà bỏ qua nhà ở, sức khỏe, gia đình và các nhu cầu cần thiết khác."
      },
      "C": {
        "text": "Có bữa ăn miễn phí thì giá trị sức lao động chắc chắn giảm.",
        "correct": false,
        "feedback": "Một khoản phúc lợi tăng không đủ để kết luận khi một khoản thiết yếu lớn hơn vừa bị cắt."
      },
      "D": {
        "text": "Phúc lợi không liên quan đến tái sản xuất sức lao động.",
        "correct": false,
        "feedback": "Các tư liệu sinh hoạt và phúc lợi thiết yếu có vai trò duy trì, phục hồi và tái sản xuất sức lao động."
      }
    },
    "conclusion": "Giá trị sức lao động được quyết định bởi giá trị các tư liệu sinh hoạt cần thiết để duy trì người lao động và gia đình họ, cùng các chi phí đào tạo phù hợp với điều kiện lịch sử–xã hội.",
    "fiftyFiftyEliminated": [
      "A",
      "D"
    ],
    "poll": {
      "A": 15,
      "B": 48,
      "C": 30,
      "D": 7,
      "reliability": "MEDIUM"
    },
    "recommendedNpc": "lyra",
    "npcHints": {
      "mara": "Đừng chỉ nhìn một khoản được thêm. Hãy tính cả khoản thiết yếu đã bị cắt.",
      "lyra": "Một suất ăn giúp tôi hôm nay, nhưng tôi vẫn cần nhà ở, sức khỏe và điều kiện nuôi gia đình.",
      "varen": "Cần xem tổng gói chi phí tái sản xuất sức lao động, không xem từng khoản riêng biệt.",
      "auren": "Truyền thông đang nhấn mạnh lợi ích nhỏ và che khuất thay đổi lớn hơn trong tổng điều kiện sống."
    },
    "theoryFile": "Giá trị sức lao động được quyết định bởi giá trị các tư liệu sinh hoạt vật chất và tinh thần cần thiết để tái sản xuất sức lao động, bao gồm cả việc duy trì gia đình và đào tạo người lao động.",
    "evidence": {
      "id": "E07",
      "title": "Bảng thay đổi phúc lợi",
      "type": "BENEFIT_STATEMENT",
      "content": [
        "Bữa ăn: +10 Coin/ngày",
        "Trợ cấp nhà ở: -20 Coin/ngày",
        "Tiền công danh nghĩa: không đổi",
        "Chi phí sinh hoạt khác: không đổi"
      ],
      "highlight": "Tổng hỗ trợ ròng giảm 10 Coin/ngày"
    },
    "moneyDialogue": {
      "before": "Hệ thống truyền thông chỉ nhấn mạnh bữa ăn miễn phí. Nhưng một khoản thiết yếu lớn hơn vừa bị loại bỏ.",
      "correct": "Phân tích đầy đủ. Phải xem tổng điều kiện tái sản xuất sức lao động.",
      "wrong": "Bạn đang cô lập một khoản lợi ích khỏi toàn bộ điều kiện sống.",
      "unlock": "Đã mở khóa Bảng thay đổi phúc lợi."
    }
  },
  {
    "id": "Q08",
    "chapter": 2,
    "reward": 8000,
    "difficulty": "MEDIUM_CALCULATION",
    "topic": "Giá trị thặng dư",
    "learningObjective": "Phân biệt giá trị chuyển dịch, giá trị mới và giá trị thặng dư.",
    "context": "Một lô sản phẩm được bán đúng giá trị 600 Coin. Giá trị nguyên liệu và hao mòn máy chuyển vào sản phẩm là 300 Coin; giá trị sức lao động là 120 Coin.",
    "question": "Giá trị thặng dư của lô hàng là bao nhiêu?",
    "answers": {
      "A": {
        "text": "180 Coin",
        "correct": true,
        "feedback": "Chính xác. Giá trị mới là 600 − 300 = 300 Coin; giá trị thặng dư là 300 − 120 = 180 Coin."
      },
      "B": {
        "text": "300 Coin",
        "correct": false,
        "feedback": "300 Coin là toàn bộ giá trị mới do lao động sống tạo ra, chưa trừ phần tương đương giá trị sức lao động."
      },
      "C": {
        "text": "480 Coin",
        "correct": false,
        "feedback": "Bạn đã lấy tổng giá trị sản phẩm trừ tiền công nhưng chưa loại phần giá trị nguyên liệu và máy móc chuyển dịch."
      },
      "D": {
        "text": "120 Coin",
        "correct": false,
        "feedback": "120 Coin là giá trị sức lao động, không phải phần giá trị mới dôi ra ngoài nó."
      }
    },
    "conclusion": "Không thể tính giá trị thặng dư bằng cách lấy toàn bộ giá trị sản phẩm trừ tiền công. Trước hết cần loại giá trị tư liệu sản xuất đã chuyển dịch, sau đó trừ giá trị sức lao động khỏi giá trị mới.",
    "fiftyFiftyEliminated": [
      "C",
      "D"
    ],
    "poll": {
      "A": 43,
      "B": 31,
      "C": 21,
      "D": 5,
      "reliability": "MEDIUM"
    },
    "recommendedNpc": "varen",
    "npcHints": {
      "mara": "Không phải toàn bộ 600 Coin đều được tạo mới trong ca lao động.",
      "lyra": "Hãy tìm phần giá trị tôi và các công nhân tạo ra sau khi loại giá trị nguyên liệu và máy móc.",
      "varen": "Thực hiện hai bước: tách giá trị chuyển dịch, sau đó trừ giá trị sức lao động.",
      "auren": "Đừng đồng nhất doanh thu hoặc tổng giá trị sản phẩm với giá trị mới."
    },
    "theoryFile": "Giá trị hàng hóa có thể biểu diễn khái quát là c + v + m. Trong đó c là giá trị tư liệu sản xuất chuyển dịch, v là giá trị sức lao động và m là giá trị thặng dư.",
    "evidence": {
      "id": "E08",
      "title": "Sổ cấu thành giá trị",
      "type": "VALUE_LEDGER",
      "content": [
        "Tổng giá trị sản phẩm: 600 Coin",
        "Giá trị chuyển dịch: 300 Coin",
        "Giá trị sức lao động: 120 Coin",
        "Phần còn lại: chưa xác định"
      ],
      "highlight": "600 − 300 − 120"
    },
    "moneyDialogue": {
      "before": "Không được lấy toàn bộ giá bán trừ trực tiếp tiền công. Một phần giá trị chỉ được chuyển từ nguyên liệu và máy móc.",
      "correct": "Kết quả chính xác: 180 Coin.",
      "wrong": "Phép tính đang trộn giá trị chuyển dịch với giá trị mới.",
      "unlock": "Đã mở khóa Sổ cấu thành giá trị."
    }
  },
  {
    "id": "Q09",
    "chapter": 2,
    "reward": 16000,
    "difficulty": "HARD_CALCULATION",
    "topic": "Tỷ suất giá trị thặng dư",
    "learningObjective": "Tính và diễn giải tỷ suất giá trị thặng dư từ thời gian lao động.",
    "context": "Trong ngày lao động 8 giờ, thời gian lao động tất yếu là 3 giờ và thời gian lao động thặng dư là 5 giờ.",
    "question": "Tỷ suất giá trị thặng dư là bao nhiêu?",
    "answers": {
      "A": {
        "text": "60%",
        "correct": false,
        "feedback": "Bạn đã đảo tử số và mẫu số: 3 chia 5 bằng 60%, nhưng tỷ suất cần lấy lao động thặng dư chia lao động tất yếu."
      },
      "B": {
        "text": "Khoảng 166,7%",
        "correct": true,
        "feedback": "Chính xác. 5 ÷ 3 × 100% ≈ 166,7%."
      },
      "C": {
        "text": "37,5%",
        "correct": false,
        "feedback": "37,5% là tỷ trọng thời gian tất yếu trong toàn bộ ngày lao động, không phải tỷ suất giá trị thặng dư."
      },
      "D": {
        "text": "62,5%",
        "correct": false,
        "feedback": "62,5% là tỷ trọng thời gian thặng dư trong toàn bộ ngày lao động. Tỷ suất cần so sánh trực tiếp thời gian thặng dư với thời gian tất yếu."
      }
    },
    "conclusion": "Tỷ suất giá trị thặng dư phản ánh tỷ lệ giữa lao động thặng dư và lao động tất yếu. Nó không phải tỷ trọng lao động thặng dư trong toàn bộ ngày lao động.",
    "fiftyFiftyEliminated": [
      "A",
      "C"
    ],
    "poll": {
      "A": 19,
      "B": 38,
      "C": 12,
      "D": 31,
      "reliability": "LOW_MEDIUM"
    },
    "recommendedNpc": "lyra",
    "npcHints": {
      "mara": "Hai tỷ lệ 5/8 và 5/3 trả lời hai câu hỏi khác nhau.",
      "lyra": "Đừng lấy năm giờ chia toàn bộ tám giờ. Hãy so phần tôi lao động thặng dư với phần lao động tất yếu.",
      "varen": "Mẫu số là thời gian lao động tất yếu, không phải tổng ngày lao động.",
      "auren": "Hãy xác định chỉ số đang đo tỷ trọng trong tổng thể hay mức độ so với một bộ phận khác."
    },
    "theoryFile": "Tỷ suất giá trị thặng dư được xác định bằng giá trị thặng dư chia tư bản khả biến, hoặc bằng thời gian lao động thặng dư chia thời gian lao động tất yếu, rồi nhân 100%.",
    "evidence": {
      "id": "E09",
      "title": "Đồng hồ phân chia ngày lao động",
      "type": "TIME_DIAGRAM",
      "content": [
        "Ngày lao động: 8 giờ",
        "Tất yếu: 3 giờ",
        "Thặng dư: 5 giờ",
        "Cần so sánh thặng dư với tất yếu"
      ],
      "highlight": "5 / 3 × 100%"
    },
    "moneyDialogue": {
      "before": "Đây không phải câu hỏi về tỷ trọng trong toàn bộ ngày lao động. Hệ thống yêu cầu so sánh hai bộ phận với nhau.",
      "correct": "Chính xác: khoảng 166,7%.",
      "wrong": "Bạn có thể đã dùng toàn bộ ngày lao động làm mẫu số hoặc đảo tỷ lệ.",
      "unlock": "Đã mở khóa Đồng hồ phân chia ngày lao động."
    }
  },
  {
    "id": "Q10",
    "chapter": 2,
    "reward": 32000,
    "difficulty": "HARD_ANALYSIS",
    "topic": "Phương pháp sản xuất giá trị thặng dư",
    "learningObjective": "Nhận diện đồng thời hai phương pháp khi nhiều biến số thay đổi.",
    "context": "Ngày lao động tăng từ 8 lên 9 giờ; đồng thời công nghệ làm thời gian lao động tất yếu giảm từ 4 xuống 3 giờ.",
    "question": "Nhận định nào đầy đủ nhất?",
    "answers": {
      "A": {
        "text": "Chỉ có sản xuất giá trị thặng dư tuyệt đối.",
        "correct": false,
        "feedback": "Kéo dài ngày lao động phản ánh phương pháp tuyệt đối, nhưng chưa giải thích việc thời gian lao động tất yếu giảm."
      },
      "B": {
        "text": "Chỉ có sản xuất giá trị thặng dư tương đối.",
        "correct": false,
        "feedback": "Rút ngắn thời gian tất yếu phản ánh phương pháp tương đối, nhưng ngày lao động đồng thời được kéo dài."
      },
      "C": {
        "text": "Có sự kết hợp cả hai phương pháp.",
        "correct": true,
        "feedback": "Chính xác. Ngày lao động dài hơn làm tăng giá trị thặng dư tuyệt đối; thời gian tất yếu ngắn hơn làm tăng giá trị thặng dư tương đối."
      },
      "D": {
        "text": "Không thể tăng giá trị thặng dư vì tiền công không đổi.",
        "correct": false,
        "feedback": "Tiền công không đổi không ngăn phần thời gian lao động thặng dư tăng lên."
      }
    },
    "conclusion": "Trong thực tế, các phương pháp sản xuất giá trị thặng dư có thể được kết hợp. Phải phân tích riêng sự thay đổi độ dài ngày lao động và sự thay đổi tỷ lệ giữa thời gian tất yếu với thời gian thặng dư.",
    "fiftyFiftyEliminated": [
      "A",
      "D"
    ],
    "poll": {
      "A": 31,
      "B": 27,
      "C": 36,
      "D": 6,
      "reliability": "LOW"
    },
    "recommendedNpc": "lyra",
    "npcHints": {
      "mara": "Có hai dữ kiện thay đổi, nên một cách giải thích đơn nhất có thể chưa đủ.",
      "lyra": "Chúng tôi vừa phải ở lại lâu hơn, vừa cần ít thời gian hơn để tạo giá trị tương đương sức lao động.",
      "varen": "Phân tích riêng độ dài ngày lao động và cấu trúc bên trong ngày lao động.",
      "auren": "Đừng để một hiện tượng che khuất hiện tượng còn lại. Hai cơ chế có thể tồn tại đồng thời."
    },
    "theoryFile": "Giá trị thặng dư tuyệt đối dựa trên kéo dài ngày lao động. Giá trị thặng dư tương đối dựa trên rút ngắn thời gian lao động tất yếu trong khi ngày lao động cho trước. Hai phương pháp có thể được kết hợp.",
    "evidence": {
      "id": "E10",
      "title": "Sổ thay đổi ca lao động",
      "type": "LABOR_SHIFT_REPORT",
      "content": [
        "Ngày lao động cũ: 8 giờ",
        "Ngày lao động mới: 9 giờ",
        "Thời gian tất yếu cũ: 4 giờ",
        "Thời gian tất yếu mới: 3 giờ"
      ],
      "highlight": "Cả độ dài và cấu trúc ngày lao động đều thay đổi"
    },
    "moneyDialogue": {
      "before": "Hai biến số đã thay đổi cùng lúc: độ dài ngày lao động và cấu trúc bên trong nó.",
      "correct": "Phân tích hoàn chỉnh. Hai phương pháp đang được kết hợp.",
      "wrong": "Bạn mới nhận diện một trong hai thay đổi.",
      "unlock": "Sổ sản xuất đã được mở."
    },
    "transitionAfter": {
      "id": "T10",
      "dialogue": "Novus Steel không chỉ kéo dài thời gian làm việc. Công nghệ cũng đang thay đổi tỷ lệ phân chia ngày lao động. Một hồ sơ hiệu suất bất thường vừa được phát hiện.",
      "nextScene": "TECHNOLOGY_LEDGER"
    }
  },
  {
    "id": "Q11",
    "chapter": 2,
    "reward": 64000,
    "difficulty": "HARD",
    "topic": "Giá trị thặng dư siêu ngạch",
    "learningObjective": "Phân biệt năng suất cá biệt cao hơn năng suất xã hội với các hình thức giá trị thặng dư khác.",
    "context": "Novus Steel sản xuất một sản phẩm trong 3 giờ, trong khi thời gian lao động xã hội cần thiết là 5 giờ. Sản phẩm vẫn bán theo mức giá trị xã hội phổ biến.",
    "question": "Phần chênh lệch doanh nghiệp có thể thu được chủ yếu là gì?",
    "answers": {
      "A": {
        "text": "Giá trị thặng dư siêu ngạch.",
        "correct": true,
        "feedback": "Chính xác. Hao phí lao động cá biệt thấp hơn mức xã hội tạo ra phần chênh lệch khi sản phẩm vẫn được bán theo giá trị xã hội."
      },
      "B": {
        "text": "Giá trị thặng dư tuyệt đối.",
        "correct": false,
        "feedback": "Không có dữ kiện kéo dài ngày lao động. Lợi thế xuất phát từ năng suất cá biệt cao hơn."
      },
      "C": {
        "text": "Địa tô tuyệt đối.",
        "correct": false,
        "feedback": "Địa tô gắn với quan hệ sở hữu và sử dụng đất đai, không phù hợp với tình huống công nghệ công nghiệp này."
      },
      "D": {
        "text": "Lợi tức cho vay.",
        "correct": false,
        "feedback": "Không có quan hệ cho vay tư bản trong tình huống."
      }
    },
    "conclusion": "Giá trị thặng dư siêu ngạch xuất hiện khi giá trị cá biệt của hàng hóa thấp hơn giá trị xã hội, nhờ năng suất cá biệt cao hơn. Lợi thế này mang tính tạm thời khi công nghệ chưa phổ biến.",
    "fiftyFiftyEliminated": [
      "C",
      "D"
    ],
    "poll": {
      "A": 41,
      "B": 39,
      "C": 11,
      "D": 9,
      "reliability": "LOW_MEDIUM"
    },
    "recommendedNpc": "varen",
    "npcHints": {
      "mara": "Giá bán vẫn dựa trên điều kiện xã hội, trong khi chi phí lao động cá biệt đã thấp hơn.",
      "lyra": "Ngày lao động không dài hơn. Điểm khác biệt nằm ở số giờ cần cho một sản phẩm.",
      "varen": "Lợi thế chỉ tồn tại khi công nghệ của chúng tôi chưa trở thành điều kiện sản xuất phổ biến.",
      "auren": "Hãy tìm khái niệm mô tả chênh lệch giữa giá trị cá biệt và giá trị xã hội."
    },
    "theoryFile": "Giá trị thặng dư siêu ngạch là phần giá trị thặng dư dôi ra do giá trị cá biệt của hàng hóa thấp hơn giá trị xã hội. Nó gắn với lợi thế năng suất cá biệt và có tính tạm thời.",
    "evidence": {
      "id": "E11",
      "title": "Hồ sơ hiệu suất Novus Steel",
      "type": "EFFICIENCY_REPORT",
      "content": [
        "Hao phí cá biệt: 3 giờ",
        "Hao phí xã hội: 5 giờ",
        "Giá bán: theo mức xã hội",
        "Công nghệ: chưa phổ biến"
      ],
      "highlight": "Giá trị cá biệt thấp hơn giá trị xã hội"
    },
    "moneyDialogue": {
      "before": "Doanh nghiệp không kéo dài ngày lao động. Khoảng cách nằm giữa hao phí cá biệt và hao phí xã hội.",
      "correct": "Chính xác. Lợi thế năng suất cá biệt tạo phần giá trị thặng dư vượt trội.",
      "wrong": "Hãy loại những hình thức thu nhập không liên quan đến lợi thế năng suất cá biệt.",
      "unlock": "Đã mở khóa Hồ sơ hiệu suất."
    }
  },
  {
    "id": "Q12",
    "chapter": 3,
    "reward": 125000,
    "difficulty": "MEDIUM_HARD",
    "topic": "Tích lũy tư bản",
    "learningObjective": "Phân biệt tiêu dùng giá trị thặng dư với tư bản hóa giá trị thặng dư.",
    "context": "Doanh nghiệp có 1.000 Coin giá trị thặng dư: 300 Coin cho tiêu dùng cá nhân, 700 Coin mua máy móc và thuê thêm lao động.",
    "question": "Nhận định nào chính xác?",
    "answers": {
      "A": {
        "text": "Toàn bộ 1.000 Coin đều trở thành tư bản tích lũy.",
        "correct": false,
        "feedback": "300 Coin dùng cho tiêu dùng cá nhân không quay lại quá trình sản xuất nên không được tư bản hóa."
      },
      "B": {
        "text": "Chỉ 700 Coin được tư bản hóa và trở thành bộ phận tích lũy.",
        "correct": true,
        "feedback": "Chính xác. Phần này được chuyển thành tư liệu sản xuất và sức lao động bổ sung."
      },
      "C": {
        "text": "300 Coin là tích lũy vì vẫn thuộc chủ doanh nghiệp.",
        "correct": false,
        "feedback": "Quyền sở hữu không quyết định một khoản có phải tích lũy. Cần xem khoản đó có được đưa trở lại sản xuất hay không."
      },
      "D": {
        "text": "Không có tích lũy vì tiền đã được chi ra.",
        "correct": false,
        "feedback": "Việc dùng tiền mua máy và thuê lao động chính là hình thức chuyển giá trị thặng dư thành tư bản bổ sung."
      }
    },
    "conclusion": "Tích lũy tư bản là tư bản hóa một phần giá trị thặng dư. Không phải toàn bộ giá trị thặng dư đều được tích lũy; phần dùng cho tiêu dùng cá nhân không trở thành tư bản mới.",
    "fiftyFiftyEliminated": [
      "C",
      "D"
    ],
    "poll": {
      "A": 28,
      "B": 51,
      "C": 13,
      "D": 8,
      "reliability": "MEDIUM"
    },
    "recommendedNpc": "varen",
    "npcHints": {
      "mara": "Hãy theo dõi đích đến của từng khoản tiền.",
      "lyra": "Khoản thuê thêm lao động sẽ quay lại quá trình sản xuất, còn tiêu dùng cá nhân thì không.",
      "varen": "Tiền được chi không đồng nghĩa với không tích lũy. Quan trọng là nó được chuyển thành yếu tố sản xuất hay tiêu dùng.",
      "auren": "Hãy phân biệt quyền sở hữu giá trị thặng dư với cách giá trị đó được sử dụng."
    },
    "theoryFile": "Tích lũy tư bản là quá trình chuyển hóa một phần giá trị thặng dư thành tư bản mới. Phần được sử dụng để mua thêm tư liệu sản xuất và sức lao động trở thành bộ phận tích lũy.",
    "evidence": {
      "id": "E12",
      "title": "Kế hoạch phân bổ giá trị thặng dư",
      "type": "INVESTMENT_PLAN",
      "content": [
        "Tổng giá trị thặng dư: 1.000 Coin",
        "Tiêu dùng cá nhân: 300 Coin",
        "Máy móc và lao động: 700 Coin",
        "Quy mô sản xuất dự kiến: tăng 35%"
      ],
      "highlight": "700 Coin quay lại quá trình sản xuất"
    },
    "moneyDialogue": {
      "before": "Không phải toàn bộ giá trị thặng dư đều quay lại sản xuất.",
      "correct": "Chính xác. Chỉ phần được tư bản hóa mới trở thành tích lũy.",
      "wrong": "Bạn đang đồng nhất quyền sở hữu hoặc hành vi chi tiền với tích lũy tư bản.",
      "unlock": "Đã mở khóa Kế hoạch phân bổ giá trị thặng dư."
    }
  },
  {
    "id": "Q13",
    "chapter": 3,
    "reward": 250000,
    "difficulty": "HARD",
    "topic": "Tích tụ và tập trung tư bản",
    "learningObjective": "Phân biệt nguồn tăng quy mô tư bản cá biệt và tác động đến tổng tư bản xã hội.",
    "context": "Doanh nghiệp A dùng giá trị thặng dư xây thêm nhà máy, sau đó sáp nhập với doanh nghiệp B.",
    "question": "Nhận định nào đầy đủ nhất?",
    "answers": {
      "A": {
        "text": "Cả hai đều làm tổng tư bản xã hội tăng theo cùng một cách.",
        "correct": false,
        "feedback": "Sáp nhập chủ yếu tổ chức lại các tư bản đã tồn tại, không tạo thêm tổng tư bản xã hội theo cùng cách với tích lũy."
      },
      "B": {
        "text": "Bước 1 là tích tụ và có thể làm tổng tư bản xã hội tăng; bước 2 là tập trung, chủ yếu tổ chức lại các tư bản đã có.",
        "correct": true,
        "feedback": "Chính xác. Hai quá trình đều làm tư bản cá biệt lớn hơn nhưng có nguồn hình thành khác nhau."
      },
      "C": {
        "text": "Bước 1 là tập trung; bước 2 là tích tụ.",
        "correct": false,
        "feedback": "Bạn đã đảo ngược khái niệm: xây thêm bằng giá trị thặng dư là tích tụ; sáp nhập là tập trung."
      },
      "D": {
        "text": "Sáp nhập không làm quy mô tư bản cá biệt thay đổi.",
        "correct": false,
        "feedback": "Sáp nhập làm tư bản dưới quyền kiểm soát của A tăng lên, dù tổng tư bản xã hội không nhất thiết tăng tương ứng."
      }
    },
    "conclusion": "Tích tụ làm tư bản cá biệt tăng thông qua tích lũy giá trị thặng dư. Tập trung làm tư bản cá biệt tăng bằng cách hợp nhất các tư bản đã tồn tại. Hai quá trình có liên hệ nhưng không đồng nhất.",
    "fiftyFiftyEliminated": [
      "C",
      "D"
    ],
    "poll": {
      "A": 35,
      "B": 39,
      "C": 20,
      "D": 6,
      "reliability": "LOW"
    },
    "recommendedNpc": "varen",
    "npcHints": {
      "mara": "Cả hai đều làm A lớn hơn, nhưng hãy hỏi phần tăng thêm đến từ đâu.",
      "lyra": "Một nhà máy mới được tạo thêm; một doanh nghiệp khác chỉ chuyển sang cùng quyền kiểm soát.",
      "varen": "Ở bước đầu, giá trị thặng dư tạo năng lực mới. Ở bước sau, những tư bản đã có được gom lại.",
      "auren": "Hãy phân biệt tăng tổng quy mô sản xuất xã hội với thay đổi cấu trúc sở hữu."
    },
    "theoryFile": "Tích tụ tư bản dựa trên tư bản hóa giá trị thặng dư. Tập trung tư bản dựa trên hợp nhất, sáp nhập hoặc thôn tính các tư bản đã tồn tại. Cả hai đều làm tư bản cá biệt lớn lên.",
    "evidence": {
      "id": "E13",
      "title": "Hồ sơ mở rộng và sáp nhập",
      "type": "CORPORATE_DOSSIER",
      "content": [
        "Nhà máy mới xây từ lợi nhuận giữ lại",
        "Doanh nghiệp B được sáp nhập",
        "Tổng quyền kiểm soát của A tăng",
        "Nguồn tăng ở hai bước khác nhau"
      ],
      "highlight": "Tạo mới so với hợp nhất"
    },
    "moneyDialogue": {
      "before": "Cả hai hành động đều làm doanh nghiệp A lớn hơn, nhưng nguồn hình thành phần tăng thêm không giống nhau.",
      "correct": "Phân biệt chính xác giữa tích tụ và tập trung.",
      "wrong": "Bạn đang chỉ nhìn kết quả quy mô lớn hơn mà bỏ qua nguồn hình thành.",
      "unlock": "Bản đồ sở hữu đã hoàn thành."
    },
    "transitionAfter": {
      "id": "T13",
      "dialogue": "Sự mở rộng nội bộ của Voss diễn ra song song với hàng loạt vụ mua lại. Quyền kiểm soát vận tải, tín dụng và dữ liệu đang hội tụ vào cùng một trung tâm.",
      "nextScene": "VOSS_CONTROL_CENTER"
    }
  },
  {
    "id": "Q14",
    "chapter": 4,
    "reward": 500000,
    "difficulty": "HARD_SYNTHESIS",
    "topic": "Độc quyền và cạnh tranh",
    "learningObjective": "Nhận thức rằng độc quyền làm cạnh tranh biến đổi chứ không thủ tiêu hoàn toàn cạnh tranh.",
    "context": "Voss kiểm soát 70% vận tải nhưng vẫn cạnh tranh với tập đoàn quốc tế; các công ty thành viên tranh ngân sách; doanh nghiệp nhỏ tìm tuyến thay thế.",
    "question": "Kết luận nào chính xác nhất?",
    "answers": {
      "A": {
        "text": "Khi độc quyền xuất hiện, mọi hình thức cạnh tranh chấm dứt.",
        "correct": false,
        "feedback": "Các dữ kiện cho thấy cạnh tranh vẫn diễn ra ở nhiều cấp độ. Độc quyền không đồng nghĩa không còn đối thủ hoặc xung đột lợi ích."
      },
      "B": {
        "text": "Độc quyền làm cạnh tranh biến đổi và gay gắt dưới những hình thức mới.",
        "correct": true,
        "feedback": "Chính xác. Cạnh tranh tiếp tục giữa các tổ chức độc quyền, với doanh nghiệp ngoài độc quyền và trong nội bộ tổ chức."
      },
      "C": {
        "text": "Vì còn cạnh tranh nên Voss không thể có vị thế độc quyền.",
        "correct": false,
        "feedback": "Vị thế độc quyền hoặc chi phối không đòi hỏi doanh nghiệp phải là người bán duy nhất hoặc không còn đối thủ."
      },
      "D": {
        "text": "Độc quyền và cạnh tranh không có quan hệ với nhau.",
        "correct": false,
        "feedback": "Độc quyền hình thành từ cạnh tranh và tập trung tư bản, đồng thời làm điều kiện và hình thức cạnh tranh thay đổi."
      }
    },
    "conclusion": "Độc quyền không thủ tiêu hoàn toàn cạnh tranh. Nó làm cạnh tranh diễn ra trong điều kiện quyền lực không cân xứng và chuyển sang các hình thức mới giữa, trong và ngoài các tổ chức độc quyền.",
    "fiftyFiftyEliminated": [
      "A",
      "D"
    ],
    "poll": {
      "A": 29,
      "B": 36,
      "C": 27,
      "D": 8,
      "reliability": "MANIPULATED",
      "warning": true
    },
    "recommendedNpc": "auren",
    "npcHints": {
      "mara": "Voss chi phối tuyến vận tải, nhưng các chủ thể khác vẫn tìm cách giành khách hàng và tiếp cận thị trường.",
      "lyra": "Ngay cả các đơn vị trong Voss cũng tranh nguồn lực với nhau.",
      "varen": "Vị thế chi phối không yêu cầu thị trường chỉ còn một doanh nghiệp duy nhất.",
      "auren": "Hãy xem cạnh tranh biến mất hay chỉ chuyển sang đối thủ, cấp độ và hình thức khác."
    },
    "theoryFile": "Độc quyền không loại bỏ cạnh tranh. Cạnh tranh tiếp tục giữa các tổ chức độc quyền, giữa độc quyền với doanh nghiệp ngoài độc quyền và trong nội bộ các tổ chức độc quyền.",
    "evidence": {
      "id": "E14",
      "title": "Bản đồ cạnh tranh dưới độc quyền",
      "type": "COMPETITION_MAP",
      "content": [
        "Voss: 70% vận tải nội địa",
        "Đối thủ quốc tế: 18%",
        "Các đơn vị Voss tranh ngân sách",
        "Doanh nghiệp nhỏ phát triển tuyến thay thế"
      ],
      "highlight": "Vị thế chi phối cùng tồn tại với cạnh tranh"
    },
    "moneyDialogue": {
      "before": "Voss tuyên bố rằng còn đối thủ thì không thể có độc quyền. Một tuyên bố khác cho rằng đã độc quyền thì cạnh tranh phải biến mất.",
      "correct": "Chính xác. Độc quyền làm cạnh tranh biến đổi, không thủ tiêu hoàn toàn nó.",
      "wrong": "Bạn đang sử dụng một định nghĩa tuyệt đối. Hãy xem đồng thời vị thế chi phối và những cuộc cạnh tranh còn tồn tại.",
      "unlock": "Đã mở khóa Bản đồ cạnh tranh dưới độc quyền."
    },
    "externalInterruption": {
      "speaker": "selene",
      "dialogue": "Cạnh tranh là lý do chúng tôi phải lớn mạnh. Đừng trừng phạt người chiến thắng chỉ vì những kẻ khác không theo kịp."
    }
  },
  {
    "id": "Q15",
    "chapter": 4,
    "reward": 1000000,
    "difficulty": "FINAL_SYNTHESIS",
    "topic": "Độc quyền, lao động và điều tiết lợi ích",
    "learningObjective": "Đánh giá đồng thời tác động tích cực và tiêu cực của tập trung nguồn lực, từ đó lựa chọn giải pháp đa chiều.",
    "context": "Voss từng đầu tư công nghệ giảm hao hụt hàng hóa, nhưng sau đó khóa vận tải, kéo dài ngày lao động, mua lại đối thủ và kiểm soát tín dụng.",
    "question": "Nhận định và giải pháp nào đầy đủ nhất?",
    "answers": {
      "A": {
        "text": "Vì Voss từng phát triển công nghệ nên mọi hành vi chi phối sau đó đều có thể chấp nhận.",
        "correct": false,
        "feedback": "Thành tựu công nghệ không miễn trừ trách nhiệm đối với hành vi lạm dụng vị thế, thao túng thông tin và xâm hại lợi ích hợp pháp."
      },
      "B": {
        "text": "Phải xóa bỏ mọi doanh nghiệp lớn vì quy mô lớn tất yếu gây hại.",
        "correct": false,
        "feedback": "Quy mô lớn có thể tập trung nguồn lực và thúc đẩy công nghệ. Vấn đề cần xử lý là hành vi lạm dụng quyền lực, không phải quy mô tự thân."
      },
      "C": {
        "text": "Thừa nhận khả năng tập trung nguồn lực của doanh nghiệp lớn, đồng thời ngăn lạm dụng vị thế, minh bạch thông tin, bảo vệ cạnh tranh và người lao động.",
        "correct": true,
        "feedback": "Chính xác. Phương án xử lý đồng thời năng lực sản xuất, quyền lực thị trường, cạnh tranh, thông tin và quan hệ lợi ích."
      },
      "D": {
        "text": "Chỉ cần giảm giá bán, các vấn đề lao động và sở hữu sẽ tự giải quyết.",
        "correct": false,
        "feedback": "Giảm giá có thể giải quyết một biểu hiện trước mắt nhưng không xử lý quyền kiểm soát vận tải, tín dụng, sở hữu và quan hệ lao động."
      }
    },
    "conclusion": "Cần đánh giá doanh nghiệp lớn và độc quyền trong tính hai mặt. Tập trung nguồn lực có thể thúc đẩy công nghệ, nhưng phải có thể chế minh bạch, bảo vệ cạnh tranh, ngăn lạm dụng vị thế và điều hòa các lợi ích chính đáng.",
    "fiftyFiftyEliminated": [
      "A",
      "D"
    ],
    "poll": {
      "A": 17,
      "B": 30,
      "C": 35,
      "D": 18,
      "reliability": "MANIPULATED",
      "warning": true
    },
    "recommendedNpc": "auren",
    "npcHints": {
      "mara": "Nếu chỉ giảm giá hôm nay mà tuyến vận tải vẫn nằm trong một bàn tay, khủng hoảng sẽ quay lại.",
      "lyra": "Đừng để người lao động biến mất khỏi giải pháp chỉ vì câu hỏi cuối mang tên độc quyền.",
      "varen": "Nếu phá bỏ năng lực sản xuất mà không tạo thể chế thay thế, Novus sẽ mất cả công nghệ và việc làm.",
      "auren": "Đừng chọn giữa hai cực đoan. Hãy tìm giải pháp vừa bảo tồn năng lực phát triển vừa ngăn quyền lực bị lạm dụng."
    },
    "theoryFile": "Tổ chức độc quyền có khả năng tập trung nguồn lực, nghiên cứu và đổi mới, nhưng cũng có thể hạn chế cạnh tranh, áp đặt điều kiện và gây tổn hại xã hội. Quản lý cần xử lý hành vi lạm dụng thay vì tuyệt đối hóa hoặc phủ nhận vai trò của doanh nghiệp lớn.",
    "evidence": {
      "id": "E15",
      "title": "Sổ Cái Ẩn",
      "type": "FINAL_LEDGER",
      "content": [
        "Mục tiêu: tối đa hóa quyền kiểm soát Voss",
        "Công cụ: tín dụng, vận tải, dữ liệu, hợp đồng",
        "Lợi ích công nghệ: được duy trì",
        "Chi phí xã hội: bị loại khỏi mô hình"
      ],
      "highlight": "Tối ưu hóa quyền lực, không phải lợi ích xã hội"
    },
    "moneyDialogue": {
      "before": "Một kết luận đơn giản không thể giải thích toàn bộ chứng cứ. Voss vừa phát triển năng lực sản xuất, vừa sử dụng năng lực đó để khóa lựa chọn của các chủ thể khác.",
      "correct": "Kết luận đã được xác nhận. Quy mô phải được đặt trong thể chế ngăn lạm dụng quyền lực và bảo vệ các lợi ích chính đáng.",
      "wrong": "Phương án đã chọn chỉ giải quyết một mặt hoặc tuyệt đối hóa một chủ thể.",
      "unlock": "Toàn bộ Sổ Cái Ẩn đã được giải mã."
    },
    "transitionAfter": {
      "id": "T15",
      "dialogue": "Không có quy luật kinh tế nào bị xóa bỏ. Thông tin, vận tải, tín dụng và tư liệu sản xuất đã bị kiểm soát để điều chỉnh hành vi của toàn thành phố theo một lợi ích riêng.",
      "nextScene": "ENDING"
    }
  }
] as const
