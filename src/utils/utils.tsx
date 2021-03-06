import NAME from "./Enum";

// region >>> 달력 관련 함수
//휴일 정보 가져오기
function getFixHoliday(pYear: string) {
  // 공휴일 정보
  const fixHolidays = [
    pYear + "0101",
    pYear + "0301",
    pYear + "0430",
    pYear + "0505",
    pYear + "0606",
    pYear + "0815",
    pYear + "1003",
    pYear + "1009",
    pYear + "1225",
    "20200124",
    "20200125",
    "20200126",
    "20200127",
    "20200930",
    "20201001",
    "20201002",
  ];

  return fixHolidays;
}
//윤달여부에 따라 마지막 날짜
export const getLastdate = (pDate: Date) => {
  let arrLast;
  const pMonIdx = pDate.getMonth();
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (pDate.getFullYear() % 4 === 0) {
    arrLast = leapYear;
  } else {
    arrLast = notLeapYear;
  }

  return arrLast[pMonIdx];
};

export const diffDays = (pDate1: Date, pDate2: Date) => {
  // let _dateA = new Date(String(pDate1).SAOtoDateString());
  // let _dateB = new Date(String(pDate2).SAOtoDateString());

  /*
   * 밀리세컨드 단위로 변환되어
   * 1000(초) / 60(분) / 60(시간) / 24(일) 나누어 일수로 계산
   */
  return (pDate2.getTime() - pDate1.getTime()) / (1000 / 60 / 60 / 24);
};
//요일 정보
export const dayList = ["일", "월", "화", "수", "목", "금", "토"];
//날짜 더하기
export const addDays = (pDate: string | Date, days: number): string => {
  let result = "";
  if (typeof pDate === "string") {
    pDate = new Date(makeDateSlash(pDate));
  }
  result = makeYMD(new Date(pDate.setDate(pDate.getDate() + days)));

  return result;
};

export const addMonths = (pDate: string | Date, month: number): string => {
  let result_month = "";
  if (typeof pDate === "string") {
    pDate = new Date(makeDateSlash(pDate));
  }

  result_month = makeYMD(new Date(pDate.setMonth(pDate.getMonth() + month)));

  return result_month;
};
//날짜 형식 > '/' 붙여서 문자 반환
export const makeDateSlash = (ymd: string) => {
  return ymd.substr(0, 4) + "/" + ymd.substr(4, 2) + "/" + ymd.substr(6, 2);
};
//날짜를 문자열로 반환 (yyyymmdd)
export const makeYMD = (date: Date): string => {
  return (
    date.getFullYear() +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    date.getDate().toString().padStart(2, "0")
  );
};
//달력 정보 가져오기
export const getCalendar = (yyyymm: string) => {
  const current = makeDateSlash(makeYMD(new Date()));
  const fixHolidays = getFixHoliday(yyyymm.substr(0, 4)); //year
  let result = [];
  let model = yyyymm + "01";
  let ymdSlash = makeDateSlash(model);
  let toMonth = new Date(ymdSlash);

  let lastDate = getLastdate(toMonth);

  for (let i = 1; i < lastDate + 1; i++) {
    model = yyyymm + i.toString().padStart(2, "0");
    ymdSlash = makeDateSlash(model);
    toMonth = new Date(ymdSlash);

    const today = toMonth.getDay();
    // 0("일") ~  6 ("토")
    const color =
      current === ymdSlash
        ? NAME.CURCOL
        : fixHolidays.includes(model) || today === 0
        ? NAME.REDCOL
        : today === 6
        ? NAME.BLUECOL
        : NAME.DARKCOL;
    // form: [요일,색상(휴일여부)] : red - #00BFFF
    result.push([today, color]); //2d Array
  }

  return result;
};

export const getThisMonday = (): string => {
  const current = new Date();
  const toDay = current.getDay();
  const calc =
    toDay === 1 ? 0 : toDay === 0 ? 1 : toDay === 6 ? 2 : -1 * (toDay - 1);
  const start = `${current.getMonth() + 1}/${current.getDate() + calc}`;
  return start;
};

export const getTodayYMD = ():string => {
  const current = new Date();
  const today = current.getDay();
  return `${current.getFullYear()}${(current.getMonth()+1).toString().padStart(2, "0")}${current.getDate().toString().padStart(2, "0")}`;
};

//FIXME : https://stackoverflow.com/questions/53603770/how-to-properly-use-fromcharcode-apply-with-uint8array-in-typescript-3
export const fixdata = (data: ArrayBuffer) => {
  let binary: string = "",
    l = 0,
    w = 10240;
  for (let l = 0; l < data.byteLength / w; ++l) {
    const result: ArrayBuffer = data.slice(l * w, l * w + w);
    const temp = new Uint8Array(result);

    temp.forEach((byte: number): void => {
      binary += String.fromCharCode(byte);
    });
    // binary += String.fromCharCode.apply(null, temp as Array<Number>);
  }
  const result2: ArrayBuffer = data.slice(l * w);
  const temp2 = new Uint8Array(result2);

  temp2.forEach((byte: number): void => {
    binary += String.fromCharCode(byte);
  });
  // binary += String.fromCharCode.apply(null, new Uint8Array(result2 as Array));
  return binary;
};

//FIXME : https://stackoverrun.com/ko/q/10264681
function ArrayBufferToString(buffer: Buffer) {
  return BinaryToString(
    String.fromCharCode.apply(
      null,
      Array.prototype.slice.apply(new Uint8Array(buffer))
    )
  );
}

function BinaryToString(binary: string) {
  var error;

  try {
    return decodeURIComponent(escape(binary));
  } catch (_error) {
    error = _error;
    if (error instanceof URIError) {
      return binary;
    } else {
      throw error;
    }
  }
}
