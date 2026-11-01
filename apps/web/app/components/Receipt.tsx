const receiptData = {
  category: "EXHIBITION",
  title: "네가 있는 곳에 늘 예술이",
  date: "2025.09.21",
  place: "국립현대미술관",
  rating: "★★★★★",
  review: "예술은 언제나 사람을 더 다정하게 만든다.",
  barcode: "MOOD-RECEIPT · 000186",
};

const Receipt = () => {
  return (
    <div
      lang="ko"
      style={{
        position: "relative",
        display: "inline-block",
        width: "220px",
        background: "#f2ede4",
        padding: "16px 14px 20px",
        boxShadow: "1px 2px 8px rgba(0,0,0,0.15)",
        fontFamily: "'Courier Prime', monospace",
      }}
    >
      {/* 테이프 */}
      <div
        style={{
          position: "absolute",
          top: "-10px",
          left: "50%",
          transform: "translateX(-50%) rotate(-1deg)",
          width: "60px",
          height: "22px",
          background: "rgba(70, 110, 200, 0.75)",
          border: "1px solid rgba(0,0,0,0.1)",
          zIndex: 10,
          opacity: 0.85,
        }}
      />
        {/* 헤더 */}
        <div
          style={{
            fontSize: "8px",
            letterSpacing: "0.18em",
            color: "#555",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
            textTransform: "uppercase",
            borderBottom: "1px solid #333",
            paddingBottom: "8px",
          }}
        >
          <span>MOOD RECEIPT</span>
          <span>{receiptData.category}</span>
        </div>

        {/* 스토어명 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#111",
              textTransform: "uppercase",
            }}
          >
            MOOD RECEIPT
          </span>
          <span
            style={{
              fontSize: "8px",
              letterSpacing: "0.1em",
              color: "#666",
            }}
          >
            문화 경험 기록소
          </span>
        </div>

        {/* 구분선 */}
        <div style={{ borderTop: "2px solid #222", margin: "10px 0" }} />

        {/* 이미지 */}
        <img
          src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=80"
          alt="미술관"
          style={{
            width: "100%",
            height: "100px",
            objectFit: "cover",
            display: "block",
            filter: "grayscale(1) contrast(1.1) brightness(0.92)",
            marginBottom: "12px",
            border: "1px solid #ccc",
          }}
        />

        {/* 제목 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            padding: "5px 0",
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#111" }}>
            {receiptData.title}
          </span>
          <span
            style={{
              fontSize: "9px",
              color: "#666",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            EXHIBITION · 2025
          </span>
        </div>

        {/* 점선 */}
        <div
          style={{ borderTop: "1px dashed #888", margin: "10px 0" }}
        />

        {/* 메타 정보 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "10px",
              color: "#333",
              padding: "3px 0",
            }}
          >
            <span>관람일</span>
            <span>{receiptData.date}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "10px",
              color: "#333",
              padding: "3px 0",
            }}
          >
            <span>장소</span>
            <span>{receiptData.place}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "10px",
              color: "#333",
              padding: "3px 0",
            }}
          >
            <span>별점</span>
            <span style={{ letterSpacing: "2px" }}>{receiptData.rating}</span>
          </div>
        </div>

        {/* 점선 */}
        <div
          style={{ borderTop: "1px dashed #888", margin: "10px 0" }}
        />

        {/* 감상 */}
        <p
          style={{
            fontSize: "10.5px",
            color: "#444",
            lineHeight: 1.75,
            fontStyle: "italic",
            letterSpacing: "0.01em",
            padding: "8px 0",
          }}
        >
          &quot;{receiptData.review}&quot;
        </p>

        {/* 구분선 */}
        <div style={{ borderTop: "2px solid #222", margin: "10px 0" }} />

        {/* 바코드 영역 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            padding: "12px 0 8px",
          }}
        >
          <div
            style={{
              width: "85%",
              height: "32px",
              background: `repeating-linear-gradient(
                90deg,
                #111 0px 1px,
                transparent 1px 2px,
                #111 2px 4px,
                transparent 4px 6px,
                #111 6px 7px,
                transparent 7px 10px,
                #111 10px 12px,
                transparent 12px 13px,
                #111 13px 15px,
                transparent 15px 18px,
                #111 18px 19px,
                transparent 19px 21px
              )`,
              opacity: 0.85,
            }}
          />
          <span
            style={{
              fontSize: "7.5px",
              color: "#777",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {receiptData.barcode}
          </span>
        </div>
    </div>
  );
};

export default Receipt;
