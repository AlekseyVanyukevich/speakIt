export class Word {
    public isChecked;
    constructor(
        public id: string,
        public word: string,
        public image: ArrayBuffer,
        public audio: ArrayBuffer,
        public transcription: string,
        public wordTranslate: string
    ) { }
}