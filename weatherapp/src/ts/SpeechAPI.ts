import { useSpeechSynthesis } from "react-speech-kit";

const { speak } = useSpeechSynthesis();
export const speakData = (data: string[]): void => {
    data.forEach((item) => {
        speak({ text: item });
    });
}