export interface QuestionOption {
  value: number;
  label: string;
}

export interface Question {
  id: string;
  image: string;
  text: string;
  options: QuestionOption[];
}

export const SURVEY_QUESTIONS: Question[] = [
  {
    id: "q1",
    image: "/images/survey1.PNG",
    text: "ช่วงนี้เธอรู้สึกมีสมาธิกับสิ่งที่ทำเหมือนเดิมมั๊ย?",
    options: [
      { value: 0, label: "ยังเหมือนเดิมนะ" },
      { value: 1, label: "เป็นบ่อยเลย" },
      { value: 2, label: "มีบ้างนะ" },
      { value: 3, label: "ไม่เลย" },
    ],
  },
  {
    id: "q2",
    image: "/images/survey2.PNG",
    text: "เธอทำอะไรแล้วรู้สึกเหนื่อยหรือใช้พลังมากขึ้นกว่าเดิมมั๊ย?",
    options: [
      { value: 0, label: "ไม่เลย" },
      { value: 1, label: "มีบ้างนะ" },
      { value: 2, label: "เป็นบ่อยเลย" },
      { value: 3, label: "ตลอดเวลาเลยอะ" },
    ],
  },
  {
    id: "q3",
    image: "/images/survey3.PNG",
    text: "เธอรู้สึกเครียดจนรู้สึกว่ารับมือกับปัญหาไม่ไหวหรือเปล่า?",
    options: [
      { value: 0, label: "ไม่เลย" },
      { value: 1, label: "มีบ้างนะ" },
      { value: 2, label: "เป็นบ่อยเลย" },
      { value: 3, label: "ตลอดเวลาเลยอะ" },
    ],
  },
  {
    id: "q4",
    image: "/images/survey4.PNG",
    text: "เธอยังรู้สึกมีความสุขและสนุกกับสิ่งที่ทำมั๊ย?",
    options: [
      { value: 0, label: "ยังมีเหมือนเดิมนะ" },
      { value: 1, label: "ก็มีบ้าง" },
      { value: 2, label: "ไม่ค่อยมี" },
      { value: 3, label: "ไม่มีเลย" },
    ],
  },
  {
    id: "q5",
    image: "/images/survey5.PNG",
    text: "เธอรู้สึกหมดพลังใจและหดหู่มั้ย?",
    options: [
      { value: 0, label: "ไม่เลย" },
      { value: 1, label: "มีบ้างนะ" },
      { value: 2, label: "เป็นบ่อยเลย" },
      { value: 3, label: "ตลอดเวลาเลยอะ" },
    ],
  },
  {
    id: "q6",
    image: "/images/survey6.PNG",
    text: "เธอยังจัดการความรับผิดชอบในชีวิตประจำวันได้ดีมั้ย?",
    options: [
      { value: 0, label: "ยังเหมือนเดิมนะ" },
      { value: 1, label: "เป็นบ่อยเลย" },
      { value: 2, label: "มีบ้างนะ" },
      { value: 3, label: "ไม่เลย" },
    ],
  },
  {
    id: "q7",
    image: "/images/survey7.PNG",
    text: "เธอรู้สึกว่าตัวเองไร้ค่ามั้ย?",
    options: [
      { value: 0, label: "ไม่เลย" },
      { value: 1, label: "มีบ้างนะ" },
      { value: 2, label: "เป็นบ่อยเลย" },
      { value: 3, label: "ตลอดเวลาเลยอะ" },
    ],
  },
  {
    id: "q8",
    image: "/images/survey8.PNG",
    text: "เธอรู้สึกว่าตัวเองยังตัดสินใจเรื่องสำคัญได้ดีหรือเปล่า?",
    options: [
      { value: 0, label: "ดีเหมือนปกตินะ" },
      { value: 1, label: "ก็ดีนะ" },
      { value: 2, label: "ไม่ค่อยดี" },
      { value: 3, label: "ไม่ได้เลย" },
    ],
  },
  {
    id: "q9",
    image: "/images/survey9.PNG",
    text: "เธอรับมือกับปัญหาของเธอไหวมั้ย?",
    options: [
      { value: 0, label: "ไหวแหละ ฉันทำได้" },
      { value: 1, label: "ก็พอได้นะ" },
      { value: 2, label: "ไม่ค่อยไหวเลย" },
      { value: 3, label: "ฉันทำไม่ได้แล้ว" },
    ],
  },
  {
    id: "q10",
    image: "/images/survey10.PNG",
    text: "ช่วงนี้เธอเศร้าหรือหดหู่ จนทำอะไรไม่ได้มั้ย?",
    options: [
      { value: 0, label: "ไม่เลย" },
      { value: 1, label: "มีบ้างนะ" },
      { value: 2, label: "เป็นบ่อยเลย" },
      { value: 3, label: "ตลอดเวลาเลยอะ" },
    ],
  },
  {
    id: "q11",
    image: "/images/survey11.PNG",
    text: "เธอไม่สามารถมีความสุข สนุกกับสิ่งต่างๆ ได้เหมือนเดิมรึเปล่า?",
    options: [
      { value: 0, label: "ไม่นะ" },
      { value: 1, label: "ยังได้นะ" },
      { value: 2, label: "ไม่ค่อยเลย" },
      { value: 3, label: "ไม่ได้เลย" },
    ],
  },
  {
    id: "q12",
    image: "/images/survey12.PNG",
    text: "เธอรู้สึกเหนื่อยล้า หมดแรง ขาดพลังงาน ที่จะทำอะไรในชีวิตมั๊ย?",
    options: [
      { value: 0, label: "ไม่เลย" },
      { value: 1, label: "มีบ้างนะ" },
      { value: 2, label: "เป็นบ่อยเลย" },
      { value: 3, label: "ตลอดเวลาเลยอะ" },
    ],
  },
];
