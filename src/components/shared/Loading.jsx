import { Loader } from "@mantine/core";
import MainNavigation from "../layout/MainNavigation";

const Loading = () => {
  return (
    <div style={{ width: "95%", maxWidth: "121ch", margin: "0 auto" }}>
      <MainNavigation />
      <main
        style={{
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader color="orangeBrenta.0" />
      </main>
    </div>
  );
};

export default Loading;
