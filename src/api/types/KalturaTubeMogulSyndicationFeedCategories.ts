

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTubeMogulSyndicationFeedCategories extends KalturaObjectBase {
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

    static animalsAndPets = new KalturaTubeMogulSyndicationFeedCategories('Animals &amp; Pets');
	static artsAndAnimation = new KalturaTubeMogulSyndicationFeedCategories('Arts &amp; Animation');
	static autos = new KalturaTubeMogulSyndicationFeedCategories('Autos');
	static comedy = new KalturaTubeMogulSyndicationFeedCategories('Comedy');
	static commercialsPromotional = new KalturaTubeMogulSyndicationFeedCategories('Commercials/Promotional');
	static entertainment = new KalturaTubeMogulSyndicationFeedCategories('Entertainment');
	static familyAndKids = new KalturaTubeMogulSyndicationFeedCategories('Family &amp; Kids');
	static howToInstructionalDiy = new KalturaTubeMogulSyndicationFeedCategories('How To/Instructional/DIY');
	static music = new KalturaTubeMogulSyndicationFeedCategories('Music');
	static newsAndBlogs = new KalturaTubeMogulSyndicationFeedCategories('News &amp; Blogs');
	static scienceAndTechnology = new KalturaTubeMogulSyndicationFeedCategories('Science &amp; Technology');
	static sports = new KalturaTubeMogulSyndicationFeedCategories('Sports');
	static travelAndPlaces = new KalturaTubeMogulSyndicationFeedCategories('Travel &amp; Places');
	static videoGames = new KalturaTubeMogulSyndicationFeedCategories('Video Games');
	static vlogsPeople = new KalturaTubeMogulSyndicationFeedCategories('Vlogs &amp; People');
}
KalturaTypesFactory.registerType('KalturaTubeMogulSyndicationFeedCategories',KalturaTubeMogulSyndicationFeedCategories);