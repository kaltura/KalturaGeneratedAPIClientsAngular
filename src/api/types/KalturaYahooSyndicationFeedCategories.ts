

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaYahooSyndicationFeedCategories extends KalturaObjectBase {
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

    static action = new KalturaYahooSyndicationFeedCategories('Action');
	static animals = new KalturaYahooSyndicationFeedCategories('Animals');
	static artAndAnimation = new KalturaYahooSyndicationFeedCategories('Art &amp; Animation');
	static commercials = new KalturaYahooSyndicationFeedCategories('Commercials');
	static entertainmentAndTv = new KalturaYahooSyndicationFeedCategories('Entertainment &amp; TV');
	static family = new KalturaYahooSyndicationFeedCategories('Family');
	static food = new KalturaYahooSyndicationFeedCategories('Food');
	static funnyVideos = new KalturaYahooSyndicationFeedCategories('Funny Videos');
	static games = new KalturaYahooSyndicationFeedCategories('Games');
	static healthAndBeauty = new KalturaYahooSyndicationFeedCategories('Health &amp; Beauty');
	static howTo = new KalturaYahooSyndicationFeedCategories('How-To');
	static moviesAndShorts = new KalturaYahooSyndicationFeedCategories('Movies &amp; Shorts');
	static music = new KalturaYahooSyndicationFeedCategories('Music');
	static newsAndPolitics = new KalturaYahooSyndicationFeedCategories('News &amp; Politics');
	static peopleAndVlogs = new KalturaYahooSyndicationFeedCategories('People &amp; Vlogs');
	static productsAndTech = new KalturaYahooSyndicationFeedCategories('Products &amp; Tech.');
	static scienceAndEnvironment = new KalturaYahooSyndicationFeedCategories('Science &amp; Environment');
	static sports = new KalturaYahooSyndicationFeedCategories('Sports');
	static transportation = new KalturaYahooSyndicationFeedCategories('Transportation');
	static travel = new KalturaYahooSyndicationFeedCategories('Travel');
}
KalturaTypesFactory.registerType('KalturaYahooSyndicationFeedCategories',KalturaYahooSyndicationFeedCategories);