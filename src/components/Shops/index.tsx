import type Store from "@entities/store";
import Image from "next/image";

type ShopsProps = {
  shopsData: Store[];
};

const Shops: React.FC<ShopsProps> = ({ shopsData }) => {
  return (
    <section style={{ padding: "24px 0", display: "flex", gap: "16px" }}>
      <aside
        style={{
          padding: "16px",
          background: "#fff",
          borderRadius: "8px",
          width: "230px",
        }}
      >
        1
      </aside>
      <div
        style={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "repeat(4, 1fr)",
          width: "100%",
        }}
      >
        {shopsData.map((el) => (
          <div
            key={el.name}
            style={{
              padding: "16px",
              background: "#fff",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            <Image
              src={el.logo}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "60px", objectFit: "contain" }}
              priority
              alt={""}
            />
            <span
              style={{
                margin: "auto",
                marginTop: "14px",
                marginBottom: "8px",
                fontWeight: 700,
              }}
            >
              {el.name}
            </span>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Доставка:</span>
                <span style={{ fontWeight: 700 }}>
                  до {el.daysDelivery} дней
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Комиссия:</span>
                <span style={{ fontWeight: 700 }}>{el.commission}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shops;
