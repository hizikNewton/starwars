import React, { useContext, useRef, useState } from "react";
import { DropDownArrow } from "../../assets/img";
import { maybe } from "../../helper";
import { MovieCtx } from "../../pages/home/Hero";
import { filmsType } from "../../pages/home/types";
import * as S from "./styles";

interface Props {
  text: string;
  data: filmsType;
}

const DropDown = ({ text, data }: Props) => {
  const [dropVisible, setDropVisible] = useState(false);
  const MovieContext = useContext(MovieCtx);

  const handleDropDownVisibility = () => {
    setDropVisible((prev) => !prev);
  };

  const divRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (maybe(() => divRef.current && e.target, null)) {
      if (divRef.current!.contains(e.target as Element)) {
        return;
      }
      setDropVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MovieAction = (title: string, url: string) => {
    if (MovieContext) {
      MovieContext.setUrlAndTitle(title, url);
    }
  };
  return (
    <>
      <div ref={divRef}>
        <S.DropDown
          onClick={(e) => {
            e.stopPropagation();
            handleDropDownVisibility();
          }}
        >
          {
            <S.DropdownContainer>
              {dropVisible && (
                <S.OptionListItem>
                  {[
                    ...data.map(({ title, url }) => (
                      <p onClick={() => MovieAction(title, url)} key={title}>
                        {title}
                      </p>
                    )),
                  ]}
                </S.OptionListItem>
              )}
            </S.DropdownContainer>
          }
          <S.SvgContainer style={{ marginLeft: "0px" }}>
            <DropDownArrow />
          </S.SvgContainer>

          <p>{text}</p>
        </S.DropDown>
      </div>
    </>
  );
};

export default DropDown;
