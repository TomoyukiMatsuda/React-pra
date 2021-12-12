import React, { Dispatch, SetStateAction } from "react";
import Loader from "react-loader-spinner";

interface Props {
  formText: string;
  setFormText: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
}

export const SearchForm: React.VFC<Props> = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "12px",
          boxShadow: "0 0 3px gray",
          borderRadius: 100,
        }}
      >
        <input
          style={{
            width: "95%",
            fontSize: 18,
            appearance: "none",
            border: "none",
            outline: "none",
          }}
          placeholder="キーワードを入力"
          value={props.formText}
          onChange={(e) => props.setFormText(e.target.value)}
        />
        <div style={{ height: 24, width: 24, margin: "auto 0 auto auto" }}>
          <Loader
            type="Oval"
            color="gray"
            height={24}
            width={24}
            visible={props.isLoading}
          />
        </div>
      </div>

      {/*tailwind css*/}
      {/*<div className="flex w-full py-2 px-3 mb-4 shadow-lg rounded-full">*/}
      {/*<label className="block text-gray-700 text-lg font-bold mb-2">*/}
      {/*  Qiita 記事 検索キーワードを入力*/}
      {/*</label>*/}
      {/*  <input*/}
      {/*    className="w-11/12 text-lg appearance-none border-none text-gray-700 outline-none"*/}
      {/*    placeholder="例：React"*/}
      {/*    value={formText}*/}
      {/*    onChange={(e) => setFormText(e.target.value)}*/}
      {/*  />*/}
      {/*  <div className="h-6 w-6 ml-auto my-auto">*/}
      {/*    <Loader*/}
      {/*      type="Oval"*/}
      {/*      color="gray"*/}
      {/*      height={24}*/}
      {/*      width={24}*/}
      {/*      visible={isLoading}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};
