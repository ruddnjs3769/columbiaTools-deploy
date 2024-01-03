"use client";

import Input from "@/components/input/Input";

export default function TraineeInput() {
  return (
    <section className={ "mx-auto p-9 w-[1020px]" }>
      <div>
        <p className={ "text-[30px] font-bold" }>참가자 정보</p>
        <p>대표 참가자</p>
        <Input
          id={'1'}
          type="text"
          label={'대표참가자'}
          placeholder="대표 참가자"
          className={ "w-full mt-4" }
          onChange={ (e) => console.log(e.target.value) }
         />
        <p>회사/단체명</p>
        <p>이메일</p>
        <p>연락처</p>
        <p>수강 인원</p>
        <p>수강 금액</p>
      </div>
      
      {/* 교육생정보는 모달로 띄우기*/}
      <div>
        <p className={ "text-[30px] font-bold" }>교육생 정보</p>
        <p>교육생 이름</p>
        <p>교육생 종류</p>
        <p>교육생 연락처</p>
        <p>교육생 이메일</p>
      </div>
    </section>
  );
}