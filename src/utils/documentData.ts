
export interface Document {
  id: number;
  title: string;
  content: string;
  theme: 'History' | 'Science' | 'Art' | 'Travel';
}

export const documentCollection: Document[] = [
  // History Theme
  {
    id: 1,
    title: "Ancient Egypt Civilization",
    content: "Ancient Egypt was a civilization of ancient North Africa, concentrated along the lower reaches of the Nile River. The civilization began around 3100 BC with the political unification of Upper and Lower Egypt and lasted until 332 BC when it was conquered by Alexander the Great.",
    theme: "History"
  },
  {
    id: 2,
    title: "Roman Empire",
    content: "The Roman Empire was the post-Republican period of ancient Rome. As a polity it included large territorial holdings around the Mediterranean Sea in Europe, North Africa, and Western Asia ruled by emperors. During its height under Trajan, it covered 5 million square kilometers.",
    theme: "History"
  },
  {
    id: 3,
    title: "World War II",
    content: "World War II was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's countries—including all the great powers—forming two opposing military alliances: the Allies and the Axis. It was the deadliest conflict in human history.",
    theme: "History"
  },
  {
    id: 4,
    title: "French Revolution",
    content: "The French Revolution was a period of radical social and political upheaval in France from 1789 to 1799. The monarchy that ruled France for centuries collapsed in three years, society underwent an epic transformation, and the country was governed by various forms including a republic and dictatorship.",
    theme: "History"
  },
  {
    id: 5,
    title: "Industrial Revolution",
    content: "The Industrial Revolution was the transition to new manufacturing processes in Europe and the United States, in the period from about 1760 to 1840. This transition included going from hand production methods to machines, new chemical manufacturing processes, and the rise of the factory system.",
    theme: "History"
  },
  
  // Science Theme
  {
    id: 6,
    title: "Quantum Physics",
    content: "Quantum physics is a branch of physics that explains the behavior of matter and energy at the atomic and subatomic levels. It's based on the idea that energy exists in discrete units called quanta and includes principles like wave-particle duality and quantum entanglement.",
    theme: "Science"
  },
  {
    id: 7,
    title: "Theory of Relativity",
    content: "The theory of relativity, proposed by Albert Einstein, describes the physics of motion between different reference frames. It consists of two principal parts: special relativity and general relativity, which incorporates gravity as a geometric property of space and time.",
    theme: "Science"
  },
  {
    id: 8,
    title: "DNA Structure",
    content: "DNA (deoxyribonucleic acid) is a molecule composed of two polynucleotide chains that coil around each other to form a double helix carrying genetic instructions. The structure was first described by James Watson and Francis Crick, based on X-ray diffraction images taken by Rosalind Franklin.",
    theme: "Science"
  },
  {
    id: 9,
    title: "Climate Change",
    content: "Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil, and gas, which produces heat-trapping gases.",
    theme: "Science"
  },
  {
    id: 10,
    title: "Artificial Intelligence",
    content: "Artificial intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals. AI research defines the field as the study of intelligent agents: any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.",
    theme: "Science"
  },
  
  // Art Theme
  {
    id: 11,
    title: "Renaissance Art",
    content: "Renaissance art emerged in Italy in the late 14th century and reached its peak in the late 15th and early 16th centuries. It was characterized by greater realism and an emphasis on portraying the human figure with perspective and depth, exemplified by artists like Leonardo da Vinci and Michelangelo.",
    theme: "Art"
  },
  {
    id: 12,
    title: "Impressionism",
    content: "Impressionism is a 19th-century art movement characterized by small, thin brush strokes, open composition, emphasis on accurate depiction of light, and ordinary subject matter. It originated with a group of Paris-based artists whose independent exhibitions brought them to prominence during the 1870s and 1880s.",
    theme: "Art"
  },
  {
    id: 13,
    title: "Cubism",
    content: "Cubism is an early-20th-century avant-garde art movement pioneered by Pablo Picasso and Georges Braque. It revolutionized European painting and sculpture by depicting objects from multiple viewpoints simultaneously, creating a fragmented, geometric appearance that emphasized two-dimensionality.",
    theme: "Art"
  },
  {
    id: 14,
    title: "Abstract Expressionism",
    content: "Abstract Expressionism was an American post-World War II art movement. It was the first specifically American movement to achieve international influence and put New York City at the center of the western art world. Artists like Jackson Pollock and Mark Rothko emphasized spontaneous creation and emotional intensity.",
    theme: "Art"
  },
  {
    id: 15,
    title: "Surrealism",
    content: "Surrealism was a cultural movement that began in the early 1920s, best known for its visual artworks and writings. The aim was to resolve the previously contradictory conditions of dream and reality into an absolute reality, a super-reality. Artists like Salvador Dalí created irrational scenes with photographic precision.",
    theme: "Art"
  },
  
  // Travel Theme
  {
    id: 16,
    title: "Venice, Italy",
    content: "Venice is a city in northeastern Italy and the capital of the Veneto region. It is situated on a group of 118 small islands that are separated by canals and linked by over 400 bridges. The city was historically the capital of the Republic of Venice and a major financial and maritime power during the Middle Ages and Renaissance.",
    theme: "Travel"
  },
  {
    id: 17,
    title: "Machu Picchu, Peru",
    content: "Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 meters above sea level in Peru. Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti. Often mistakenly referred to as the 'Lost City of the Incas', it is the most familiar icon of Inca civilization.",
    theme: "Travel"
  },
  {
    id: 18,
    title: "Kyoto, Japan",
    content: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It's also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
    theme: "Travel"
  },
  {
    id: 19,
    title: "Grand Canyon, USA",
    content: "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles long, up to 18 miles wide and attains a depth of over a mile. For thousands of years, the area has been continuously inhabited by Native Americans, who built settlements within the canyon and its many caves.",
    theme: "Travel"
  },
  {
    id: 20,
    title: "Santorini, Greece",
    content: "Santorini is an island in the southern Aegean Sea, about 200 km southeast of Greece's mainland. It is the largest island of a small, circular archipelago, which bears the same name and is the remnant of a volcanic caldera. It forms the southernmost member of the Cyclades group of islands.",
    theme: "Travel"
  }
];
