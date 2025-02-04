// src/pages/MainPage.tsx
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import PartnersReferences from "../components/PartnersReferences";
import { fetchHomePage } from "../api/pageApi";
import { Page } from "../types/globalTypes";
import LoadingSpinner from "../components/LoadSpinner";
import StyledText from "../components/StyledText";
// import ChatBubble from "../components/ChatBubble";

const MainPage: React.FC = () => {
  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetchHomePage();
        setData(response);
      } catch (err) {
        setLoading(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    data();
  }, []);

  return (
    <>
      <LoadingSpinner visible={loading} />
      <div className="flex flex-col min-h-screen">
        {/* Hero */}
        {data &&
          data.sections.map((section) => {
            return section.components.map((component) => (
              <div className="text-black">
                <StyledText
                  content={component.content_value}
                  className="text-red-600"
                />
              </div>
            ));
          })}
        <HeroSection />
        <PartnersReferences />
        {/* <ChatBubble /> */}
      </div>
    </>
  );
};

export default MainPage;
