interface SizeType {
  height: number;
  width: number;
}

export { SizeType };

interface MarginType {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export { MarginType };

interface Bill {
  action: string;
  authors: Array<string>;
  billType: Array<string>;
  introduced: Date;
  latestMotion: string;
  link: string;
  result: Array<string>;
  studentSponsor: Array<string>;
  title: string;
  vote: {
    desc: string;
    date: Date;
  };
  yna: Array<{ y: number; n: number; a: number }>;
  id: number;
}

export { Bill };
