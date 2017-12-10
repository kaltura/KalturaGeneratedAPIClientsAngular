

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaITunesSyndicationFeedCategories extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static arts = new KalturaITunesSyndicationFeedCategories('Arts');
	static artsDesign = new KalturaITunesSyndicationFeedCategories('Arts/Design');
	static artsFashionBeauty = new KalturaITunesSyndicationFeedCategories('Arts/Fashion &amp; Beauty');
	static artsFood = new KalturaITunesSyndicationFeedCategories('Arts/Food');
	static artsLiterature = new KalturaITunesSyndicationFeedCategories('Arts/Literature');
	static artsPerformingArts = new KalturaITunesSyndicationFeedCategories('Arts/Performing Arts');
	static artsVisualArts = new KalturaITunesSyndicationFeedCategories('Arts/Visual Arts');
	static business = new KalturaITunesSyndicationFeedCategories('Business');
	static businessBusinessNews = new KalturaITunesSyndicationFeedCategories('Business/Business News');
	static businessCareers = new KalturaITunesSyndicationFeedCategories('Business/Careers');
	static businessInvesting = new KalturaITunesSyndicationFeedCategories('Business/Investing');
	static businessManagementMarketing = new KalturaITunesSyndicationFeedCategories('Business/Management &amp; Marketing');
	static businessShopping = new KalturaITunesSyndicationFeedCategories('Business/Shopping');
	static comedy = new KalturaITunesSyndicationFeedCategories('Comedy');
	static education = new KalturaITunesSyndicationFeedCategories('Education');
	static educationHigherEducation = new KalturaITunesSyndicationFeedCategories('Education/Higher Education');
	static educationK12 = new KalturaITunesSyndicationFeedCategories('Education/K-12');
	static educationLanguageCourses = new KalturaITunesSyndicationFeedCategories('Education/Language Courses');
	static educationTechnology = new KalturaITunesSyndicationFeedCategories('Education/Education Technology');
	static educationTraining = new KalturaITunesSyndicationFeedCategories('Education/Training');
	static gamesHobbies = new KalturaITunesSyndicationFeedCategories('Games &amp; Hobbies');
	static gamesHobbiesAutomotive = new KalturaITunesSyndicationFeedCategories('Games &amp; Hobbies/Automotive');
	static gamesHobbiesAviation = new KalturaITunesSyndicationFeedCategories('Games &amp; Hobbies/Aviation');
	static gamesHobbiesHobbies = new KalturaITunesSyndicationFeedCategories('Games &amp; Hobbies/Hobbies');
	static gamesHobbiesOtherGames = new KalturaITunesSyndicationFeedCategories('Games &amp; Hobbies/Other Games');
	static gamesHobbiesVideoGames = new KalturaITunesSyndicationFeedCategories('Games &amp; Hobbies/Video Games');
	static governmentOrganizations = new KalturaITunesSyndicationFeedCategories('Government &amp; Organizations');
	static governmentOrganizationsLocal = new KalturaITunesSyndicationFeedCategories('Government &amp; Organizations/Local');
	static governmentOrganizationsNational = new KalturaITunesSyndicationFeedCategories('Government &amp; Organizations/National');
	static governmentOrganizationsNonProfit = new KalturaITunesSyndicationFeedCategories('Government &amp; Organizations/Non-Profit');
	static governmentOrganizationsRegional = new KalturaITunesSyndicationFeedCategories('Government &amp; Organizations/Regional');
	static health = new KalturaITunesSyndicationFeedCategories('Health');
	static healthAlternativeHealth = new KalturaITunesSyndicationFeedCategories('Health/Alternative Health');
	static healthFitnessNutrition = new KalturaITunesSyndicationFeedCategories('Health/Fitness &amp; Nutrition');
	static healthSelfHelp = new KalturaITunesSyndicationFeedCategories('Health/Self-Help');
	static healthSexuality = new KalturaITunesSyndicationFeedCategories('Health/Sexuality');
	static kidsFamily = new KalturaITunesSyndicationFeedCategories('Kids &amp; Family');
	static music = new KalturaITunesSyndicationFeedCategories('Music');
	static newsPolitics = new KalturaITunesSyndicationFeedCategories('News &amp; Politics');
	static religionSpirituality = new KalturaITunesSyndicationFeedCategories('Religion &amp; Spirituality');
	static religionSpiritualityBuddhism = new KalturaITunesSyndicationFeedCategories('Religion &amp; Spirituality/Buddhism');
	static religionSpiritualityChristianity = new KalturaITunesSyndicationFeedCategories('Religion &amp; Spirituality/Christianity');
	static religionSpiritualityHinduism = new KalturaITunesSyndicationFeedCategories('Religion &amp; Spirituality/Hinduism');
	static religionSpiritualityIslam = new KalturaITunesSyndicationFeedCategories('Religion &amp; Spirituality/Islam');
	static religionSpiritualityJudaism = new KalturaITunesSyndicationFeedCategories('Religion &amp; Spirituality/Judaism');
	static religionSpiritualityOther = new KalturaITunesSyndicationFeedCategories('Religion &amp; Spirituality/Other');
	static religionSpiritualitySpirituality = new KalturaITunesSyndicationFeedCategories('Religion &amp; Spirituality/Spirituality');
	static scienceMedicine = new KalturaITunesSyndicationFeedCategories('Science &amp; Medicine');
	static scienceMedicineMedicine = new KalturaITunesSyndicationFeedCategories('Science &amp; Medicine/Medicine');
	static scienceMedicineNaturalSciences = new KalturaITunesSyndicationFeedCategories('Science &amp; Medicine/Natural Sciences');
	static scienceMedicineSocialSciences = new KalturaITunesSyndicationFeedCategories('Science &amp; Medicine/Social Sciences');
	static societyCulture = new KalturaITunesSyndicationFeedCategories('Society &amp; Culture');
	static societyCultureHistory = new KalturaITunesSyndicationFeedCategories('Society &amp; Culture/History');
	static societyCulturePersonalJournals = new KalturaITunesSyndicationFeedCategories('Society &amp; Culture/Personal Journals');
	static societyCulturePhilosophy = new KalturaITunesSyndicationFeedCategories('Society &amp; Culture/Philosophy');
	static societyCulturePlacesTravel = new KalturaITunesSyndicationFeedCategories('Society &amp; Culture/Places &amp; Travel');
	static sportsRecreation = new KalturaITunesSyndicationFeedCategories('Sports &amp; Recreation');
	static sportsRecreationAmateur = new KalturaITunesSyndicationFeedCategories('Sports &amp; Recreation/Amateur');
	static sportsRecreationCollegeHighSchool = new KalturaITunesSyndicationFeedCategories('Sports &amp; Recreation/College &amp; High School');
	static sportsRecreationOutdoor = new KalturaITunesSyndicationFeedCategories('Sports &amp; Recreation/Outdoor');
	static sportsRecreationProfessional = new KalturaITunesSyndicationFeedCategories('Sports &amp; Recreation/Professional');
	static technology = new KalturaITunesSyndicationFeedCategories('Technology');
	static technologyGadgets = new KalturaITunesSyndicationFeedCategories('Technology/Gadgets');
	static technologyPodcasting = new KalturaITunesSyndicationFeedCategories('Technology/Podcasting');
	static technologySoftwareHowTo = new KalturaITunesSyndicationFeedCategories('Technology/Software How-To');
	static technologyTechNews = new KalturaITunesSyndicationFeedCategories('Technology/Tech News');
	static tvFilm = new KalturaITunesSyndicationFeedCategories('TV &amp; Film');
}
KalturaTypesFactory.registerType('KalturaITunesSyndicationFeedCategories',KalturaITunesSyndicationFeedCategories);