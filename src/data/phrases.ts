import { PhraseCategory } from "@/types/translator";

export const phraseCategories: Record<string, PhraseCategory[]> = {
  es: [
    {
      id: "greetings",
      name: "Greetings",
      icon: "👋",
      phrases: [
        { id: "1", category: "greetings", english: "Hello", translation: "Hola", pronunciation: "OH-lah" },
        { id: "2", category: "greetings", english: "Good morning", translation: "Buenos días", pronunciation: "BWAY-nos DEE-ahs" },
        { id: "3", category: "greetings", english: "Good evening", translation: "Buenas noches", pronunciation: "BWAY-nas NO-ches" },
        { id: "4", category: "greetings", english: "Thank you", translation: "Gracias", pronunciation: "GRAH-see-ahs" },
        { id: "5", category: "greetings", english: "Please", translation: "Por favor", pronunciation: "por fah-VOR" }
      ]
    },
    {
      id: "directions",
      name: "Directions",
      icon: "🗺️",
      phrases: [
        { id: "6", category: "directions", english: "Where is...?", translation: "¿Dónde está...?", pronunciation: "DON-deh ehs-TAH" },
        { id: "7", category: "directions", english: "How do I get to...?", translation: "¿Cómo llego a...?", pronunciation: "KO-mo YEH-go ah" },
        { id: "8", category: "directions", english: "Turn left", translation: "Gira a la izquierda", pronunciation: "HEE-rah ah lah ees-kee-EHR-dah" },
        { id: "9", category: "directions", english: "Turn right", translation: "Gira a la derecha", pronunciation: "HEE-rah ah lah deh-REH-chah" },
        { id: "10", category: "directions", english: "Straight ahead", translation: "Todo recto", pronunciation: "TO-do REHK-to" }
      ]
    },
    {
      id: "food",
      name: "Food & Dining",
      icon: "🍽️",
      phrases: [
        { id: "11", category: "food", english: "I would like...", translation: "Me gustaría...", pronunciation: "meh goos-tah-REE-ah" },
        { id: "12", category: "food", english: "The menu, please", translation: "La carta, por favor", pronunciation: "lah KAR-tah por fah-VOR" },
        { id: "13", category: "food", english: "The check, please", translation: "La cuenta, por favor", pronunciation: "lah KWEN-tah por fah-VOR" },
        { id: "14", category: "food", english: "Water", translation: "Agua", pronunciation: "AH-gwah" },
        { id: "15", category: "food", english: "Beer", translation: "Cerveza", pronunciation: "ser-VEH-sah" }
      ]
    },
    {
      id: "emergency",
      name: "Emergency",
      icon: "🚨",
      phrases: [
        { id: "16", category: "emergency", english: "Help!", translation: "¡Ayuda!", pronunciation: "ah-YOO-dah" },
        { id: "17", category: "emergency", english: "Call the police", translation: "Llama a la policía", pronunciation: "YAH-mah ah lah po-lee-SEE-ah" },
        { id: "18", category: "emergency", english: "I need a doctor", translation: "Necesito un médico", pronunciation: "neh-seh-SEE-to oon MEH-dee-ko" },
        { id: "19", category: "emergency", english: "Where is the hospital?", translation: "¿Dónde está el hospital?", pronunciation: "DON-deh ehs-TAH el os-pee-TAHL" },
        { id: "20", category: "emergency", english: "I don't speak Spanish", translation: "No hablo español", pronunciation: "no AH-blo ehs-pah-NYOL" }
      ]
    }
  ],
  fr: [
    {
      id: "greetings",
      name: "Greetings",
      icon: "👋",
      phrases: [
        { id: "1", category: "greetings", english: "Hello", translation: "Bonjour", pronunciation: "bon-ZHOOR" },
        { id: "2", category: "greetings", english: "Good morning", translation: "Bonjour", pronunciation: "bon-ZHOOR" },
        { id: "3", category: "greetings", english: "Good evening", translation: "Bonsoir", pronunciation: "bon-SWAHR" },
        { id: "4", category: "greetings", english: "Thank you", translation: "Merci", pronunciation: "mer-SEE" },
        { id: "5", category: "greetings", english: "Please", translation: "S'il vous plaît", pronunciation: "seel voo PLAY" }
      ]
    },
    {
      id: "directions",
      name: "Directions",
      icon: "🗺️",
      phrases: [
        { id: "6", category: "directions", english: "Where is...?", translation: "Où est...?", pronunciation: "oo AY" },
        { id: "7", category: "directions", english: "How do I get to...?", translation: "Comment aller à...?", pronunciation: "ko-mahn tah-LAY ah" },
        { id: "8", category: "directions", english: "Turn left", translation: "Tournez à gauche", pronunciation: "toor-NAY ah GOHSH" },
        { id: "9", category: "directions", english: "Turn right", translation: "Tournez à droite", pronunciation: "toor-NAY ah DRWAHT" },
        { id: "10", category: "directions", english: "Straight ahead", translation: "Tout droit", pronunciation: "too DRWAH" }
      ]
    }
  ],
  de: [
    {
      id: "greetings",
      name: "Greetings",
      icon: "👋",
      phrases: [
        { id: "1", category: "greetings", english: "Hello", translation: "Hallo", pronunciation: "HAH-lo" },
        { id: "2", category: "greetings", english: "Good morning", translation: "Guten Morgen", pronunciation: "GOO-ten MOR-gen" },
        { id: "3", category: "greetings", english: "Good evening", translation: "Guten Abend", pronunciation: "GOO-ten AH-bent" },
        { id: "4", category: "greetings", english: "Thank you", translation: "Danke", pronunciation: "DAHN-keh" },
        { id: "5", category: "greetings", english: "Please", translation: "Bitte", pronunciation: "BIT-teh" }
      ]
    }
  ],
  it: [
    {
      id: "greetings",
      name: "Greetings",
      icon: "👋",
      phrases: [
        { id: "1", category: "greetings", english: "Hello", translation: "Ciao", pronunciation: "chah-OH" },
        { id: "2", category: "greetings", english: "Good morning", translation: "Buongiorno", pronunciation: "bwon-JOR-no" },
        { id: "3", category: "greetings", english: "Good evening", translation: "Buonasera", pronunciation: "bwoh-nah-SEH-rah" },
        { id: "4", category: "greetings", english: "Thank you", translation: "Grazie", pronunciation: "GRAH-tsee-eh" },
        { id: "5", category: "greetings", english: "Please", translation: "Per favore", pronunciation: "per fah-VOH-reh" }
      ]
    }
  ],
  pt: [
    {
      id: "greetings",
      name: "Greetings",
      icon: "👋",
      phrases: [
        { id: "1", category: "greetings", english: "Hello", translation: "Olá", pronunciation: "oh-LAH" },
        { id: "2", category: "greetings", english: "Good morning", translation: "Bom dia", pronunciation: "bom DEE-ah" },
        { id: "3", category: "greetings", english: "Good evening", translation: "Boa noite", pronunciation: "BOH-ah NOH-ee-teh" },
        { id: "4", category: "greetings", english: "Thank you", translation: "Obrigado", pronunciation: "oh-bree-GAH-do" },
        { id: "5", category: "greetings", english: "Please", translation: "Por favor", pronunciation: "por fah-VOR" }
      ]
    }
  ]
};