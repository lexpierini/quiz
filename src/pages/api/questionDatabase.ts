import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";

const answers: QuestionModel[] = [
    new QuestionModel(1, 'Which bug transmits Chagas Disease?', [
        AnswerModel.wrong('Bee'),
        AnswerModel.wrong('Cockroach'),
        AnswerModel.wrong('Flea'),
        AnswerModel.correct('Vinchuca'),
    ]),
    new QuestionModel(2, 'Who painted the Mona Lisa?', [
        AnswerModel.wrong('Léo Almeida'),
        AnswerModel.wrong('Leonardo Rizzuto'),
        AnswerModel.wrong('Leonardo DiCaprio'),
        AnswerModel.correct('Leonardo da Vinci'),
    ]),
    new QuestionModel(3, 'What is the name of the largest ocean on Earth?', [
        AnswerModel.wrong('Artic Ocean'),
        AnswerModel.wrong('Atlantic Ocean'),
        AnswerModel.wrong('Southern Ocean'),
        AnswerModel.correct('Pacific Ocean'),
    ]),
    new QuestionModel(4, 'In the story of Snow White, how many dwarfs are there?', [
        AnswerModel.wrong('Four'),
        AnswerModel.wrong('Five'),
        AnswerModel.wrong('Six'),
        AnswerModel.correct('Seven'),
    ]),
    new QuestionModel(5, 'In the story of Snow White, how many dwarfs are there?', [
        AnswerModel.wrong('Four'),
        AnswerModel.wrong('Five'),
        AnswerModel.wrong('Six'),
        AnswerModel.correct('Seven'),
    ]),
    new QuestionModel(6, 'What do bees collect to make honey?', [
        AnswerModel.wrong('Water'),
        AnswerModel.wrong('Oil'),
        AnswerModel.wrong('Leaves'),
        AnswerModel.correct('Nectar'),
    ]),
    new QuestionModel(6, 'Who is the king of the gods in Greek mythology?', [
        AnswerModel.wrong('Poseidon'),
        AnswerModel.wrong('Ares'),
        AnswerModel.wrong('Apollo'),
        AnswerModel.correct('Zeus'),
    ]),
    new QuestionModel(7, 'What is the only planet that rotates on its side?', [
        AnswerModel.wrong('Neptune'),
        AnswerModel.wrong('Saturn'),
        AnswerModel.wrong('Jupiter'),
        AnswerModel.correct('Uranus'),
    ]),
    new QuestionModel(8, 'What is the official animal of Scotland?', [
        AnswerModel.wrong('Sheep'),
        AnswerModel.wrong('Horse'),
        AnswerModel.wrong('Loch Ness'),
        AnswerModel.correct('Unicorn'),
    ]),
    new QuestionModel(9, 'What animal’s milk is pink?', [
        AnswerModel.wrong('Flamingo'),
        AnswerModel.wrong('River Dolphin'),
        AnswerModel.wrong('Pig'),
        AnswerModel.correct('Hippopotamus'),
    ]),
    new QuestionModel(10, 'In what year did the Berlin Wall fall?', [
        AnswerModel.wrong('1969'),
        AnswerModel.wrong('1999'),
        AnswerModel.wrong('1979'),
        AnswerModel.correct('1989'),
    ]),
    new QuestionModel(11, 'What is the capital city of Brazil?', [
        AnswerModel.wrong('Amazonas'),
        AnswerModel.wrong('Rio de Janeiro'),
        AnswerModel.wrong('São Paulo'),
        AnswerModel.correct('Brasília'),
    ]),
    new QuestionModel(12, 'Which mountain range is the longest in the world?', [
        AnswerModel.wrong('The Annapurna'),
        AnswerModel.wrong('The Nanga Parbat'),
        AnswerModel.wrong('The Everest'),
        AnswerModel.correct('The Andes'),
    ]),
    new QuestionModel(13, 'What is the largest island in the world?', [
        AnswerModel.wrong('Madagascar'),
        AnswerModel.wrong('Borneo'),
        AnswerModel.wrong('New Guinea'),
        AnswerModel.correct('Greenland'),
    ]),
    new QuestionModel(14, 'What is the largest bone in the human body?', [
        AnswerModel.wrong('Fibula'),
        AnswerModel.wrong('Tibia'),
        AnswerModel.wrong('Clavicle'),
        AnswerModel.correct('Femur'),
    ]),
    new QuestionModel(15, 'In which year did the Titanic sink?', [
        AnswerModel.wrong('1902'),
        AnswerModel.wrong('1932'),
        AnswerModel.wrong('1922'),
        AnswerModel.correct('1912'),
    ]),
    new QuestionModel(16, 'How many colors are there in a rainbow?', [
        AnswerModel.wrong('Nine'),
        AnswerModel.wrong('Eight'),
        AnswerModel.wrong('Ten'),
        AnswerModel.correct('Seven'),
    ]),
]

export default answers