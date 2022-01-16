// English stopwords, assuming that 1-letter tokens are already filtered out. Based on the list
// from NLTK, found via https://gist.github.com/sebleier/554280
const englishStopwords = ['me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your',
'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers',
'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what',
'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be',
'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'an', 'the',
'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with',
'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below',
'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further',
'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each',
'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so',
'than', 'too', 'very', 'can', 'will', 'just', 'don', 'could', 'should', 'would', 'now', 'll',
're', 've', 'aren', 'couldn', 'didn', 'doesn', 'hadn', 'hasn', 'haven', 'isn', 'mustn', 'needn',
'shouldn', 'wasn', 'weren', 'won', 'wouldn'];

const italianDefaultStopwords = ['ad','al','allo','ai','agli','all','agl','alla','alle','con','col','coi',
'da','dal','dallo','dai','dagli','dall' ,'dagl' ,'dalla','dalle','di','del','dello','dei','degli','dell' ,
'degl' ,'della','delle','in','nel','nello','nei','negli','nell' ,'negl' ,'nella','nelle','su','sul','sullo',
'sui','sugli','sull' ,'sugl' ,'sulla','sulle','per','tra','contro' ,'io','tu','lui','lei','noi','voi','loro' ,
'mio','mia','miei' ,'mie','tuo','tua','tuoi' ,'tue','suo','sua','suoi' ,'sue','nostro' ,'nostra' ,'nostri' ,
'nostre' ,'vostro' ,'vostra' ,'vostri' ,'vostre' ,'mi','ti','ci','vi','lo','la','li','le','gli','ne','il',
'un','uno','una','ma','ed','se','perché','anche','come' ,'dov','dove' ,'che','chi','cui','non','più',
'quale','quanto' ,'quanti' ,'quanta' ,'quante' ,'quello' ,'quelli' ,'quella' ,'quelle' ,'questo' ,'questi' ,
'questa' ,'queste' ,'si','tutto','tutti','a' ,'c' ,'e' ,'i' ,'l' ,'o' ,'ho','hai','ha','abbiamo','avete',
'hanno','abbia','abbiate','abbiano','avrò','avrai','avrà','avremo','avrete','avranno','avrei','avresti','avrebbe',
'avremmo','avreste','avrebbero','avevo','avevi','aveva','avevamo','avevate','avevano','ebbi','avesti','ebbe','avemmo',
'aveste','ebbero','avessi','avesse','avessimo','avessero','avendo','avuto','avuta','avuti','avute','sono','sei','è',
'siamo','siete','sia','siate','siano','sarò','sarai','sarà','saremo','sarete','saranno','sarei','saresti','sarebbe',
'saremmo','sareste','sarebbero','ero','eri','era','eravamo','eravate','erano','fui','fosti','fu','fummo','foste',
'furono','fossi','fosse','fossimo','fossero','essendo','faccio','fai','facciamo','fanno','faccia','facciate',
'facciano','farò','farai','farà','faremo','farete','faranno','farei','faresti','farebbe','faremmo','fareste',
'farebbero','facevo','facevi','faceva','facevamo','facevate','facevano','feci','facesti','fece','facemmo',
'faceste','fecero','facessi','facesse','facessimo','facessero','facendo','sto','stai','sta','stiamo','stanno',
'stia','stiate','stiano','starò','starai','starà','staremo','starete','staranno','starei','staresti','starebbe',
'staremmo','stareste','starebbero','stavo','stavi','stava','stavamo','stavate','stavano','stetti','stesti','stette',
'stemmo','steste','stettero','stessi','stesse','stessimo','stessero','stando'];

const defaultStopwords = [...englishStopwords, ...italianDefaultStopwords];

export default class Stopwords {

// "useDefaultStopwords" and "customStopwords" are optional parameters, as specified in the
// constructor for Corpus, which control whether the default stopword list should be used, and to
  // specify any custom stopwords. If the default stopword list is to be used, any custom stopwords
  // are added to that list; if not, the custom stopwords are used instead of the default list.
  constructor(useDefaultStopwords = true, customStopwords = []) {
    const stopwords = useDefaultStopwords ? customStopwords.concat(defaultStopwords) : customStopwords;
    this._stopwords = new Map(stopwords.map(d => [d, true]));
  }

  // Returns true if the current stopword list contains the given term, or false otherwise
  includes(word) {
    return this._stopwords.has(word);
  }

  // Returns an array of the stopword list currently in use (for inspection or debugging)
  getStopwordList() {
    return Array.from(this._stopwords.keys());
  }
}
