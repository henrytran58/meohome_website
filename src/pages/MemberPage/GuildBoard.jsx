import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard"; // Adjust path if needed
import avtDemo from "../../assets/member_avt/avt_demo_rm_bg.png";

const GuildBoard = () => {
  const profileProps = {
    avatarUrl: "https://via.placeholder.com/100",
    iconUrl: "",
    grainUrl: "",
    showBehindGradient: false,
    enableTilt: true,
    contactText: "Liên hệ",
  };

  return (
    <div
      style={{
        width: "100%",
        // maxWidth: "200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Chủ Guild */}
      <div>
        <div className="flex justify-center">
          <ProfileCard
            {...profileProps}
            name="Thuỷ Meo"
            title="Chủ Guild"
            avatarUrl={avtDemo}
          />
        </div>
      </div>

      {/* Phó Guild */}
      <div>
        <div className="flex justify-center flex-wrap gap-8">
          <ProfileCard
            {...profileProps}
            name="Binbitbay"
            title="Phó Guild"
            avatarUrl={avtDemo}
          />
          <ProfileCard
            {...profileProps}
            name="Meo Xu"
            title="Phó Guild"
            avatarUrl={avtDemo}
          />
          <ProfileCard
            {...profileProps}
            name="tạ nhẹ"
            title="Phó Guild"
            avatarUrl={avtDemo}
          />
        </div>
      </div>

      {/* Tinh Anh */}
      <div>
        <div className="flex justify-center flex-wrap gap-3">
          <ProfileCard
            {...profileProps}
            name="Tiểu Tam"
            title="Tinh Anh"
            avatarUrl={avtDemo}
          />
          <ProfileCard
            {...profileProps}
            name="Mymy"
            title="Tinh Anh"
            avatarUrl={avtDemo}
          />
          <ProfileCard
            {...profileProps}
            name="Đậm Sâu"
            title="Tinh Anh"
            avatarUrl={avtDemo}
          />
          <ProfileCard
            {...profileProps}
            name="Trúcpeheo"
            title="Tinh Anh"
            avatarUrl={avtDemo}
          />
        </div>
      </div>
    </div>
  );
};

export default GuildBoard;
