# Mật mã Sổ Cái

Web-game điều tra kinh tế gồm 15 câu theo concept **AI LÀ TRIỆU PHÚ**. Nội dung V1.0 đi qua bốn chương: hàng hóa và thị trường, sức lao động và giá trị thặng dư, tích lũy tư bản, cạnh tranh và độc quyền.

## Chạy dự án

```bash
npm install
npm run dev
```

Kiểm tra trước khi bàn giao:

```bash
npm run build
npm run lint
```

## Cấu trúc nội dung

- `src/data/contentSpec.ts`: dữ liệu biên tập được trích nguyên trạng từ Content Spec V1.0.
- `src/data/questions.ts`: lớp chuyển đổi sang dữ liệu hiển thị; chứa tên chương, mã chứng cứ và phần lý luận bổ sung.
- `src/game/gameEngine.ts`: luật chơi, mạng, mốc an toàn, trợ giúp và thống kê lượt đầu.
- `src/App.tsx`: các màn intro, briefing, câu hỏi, chuyển chương và kết thúc.

Khi Content Spec Word thay đổi, có thể tái tạo lớp dữ liệu gốc bằng:

```bash
python scripts/extract_content_spec.py "duong-dan-content-spec.docx" src/data/contentSpec.ts
```

Sau khi cập nhật, chạy `npm run build`. Bộ kiểm tra sẽ phát hiện thiếu câu, sai thang thưởng, thăm dò không đủ 100%, 50:50 loại nhầm đáp án đúng, thiếu gợi ý NPC hoặc hồ sơ lý luận quá ngắn.
