
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSyndicationFeedStatus } from './KalturaSyndicationFeedStatus';
import { KalturaSyndicationFeedType } from './KalturaSyndicationFeedType';
import { KalturaSyndicationFeedEntriesOrderBy } from './KalturaSyndicationFeedEntriesOrderBy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseSyndicationFeedArgs  extends KalturaObjectBaseArgs {
    playlistId? : string;
	name? : string;
	type? : KalturaSyndicationFeedType;
	landingPage? : string;
	allowEmbed? : boolean;
	playerUiconfId? : number;
	flavorParamId? : number;
	transcodeExistingContent? : boolean;
	addToDefaultConversionProfile? : boolean;
	categories? : string;
	storageId? : number;
	entriesOrderBy? : KalturaSyndicationFeedEntriesOrderBy;
	enforceEntitlement? : boolean;
	privacyContext? : string;
	useCategoryEntries? : boolean;
	feedContentTypeHeader? : string;
}


export class KalturaBaseSyndicationFeed extends KalturaObjectBase {

    readonly id : string;
	readonly feedUrl : string;
	readonly partnerId : number;
	playlistId : string;
	name : string;
	readonly status : KalturaSyndicationFeedStatus;
	type : KalturaSyndicationFeedType;
	landingPage : string;
	readonly createdAt : Date;
	allowEmbed : boolean;
	playerUiconfId : number;
	flavorParamId : number;
	transcodeExistingContent : boolean;
	addToDefaultConversionProfile : boolean;
	categories : string;
	storageId : number;
	entriesOrderBy : KalturaSyndicationFeedEntriesOrderBy;
	enforceEntitlement : boolean;
	privacyContext : string;
	readonly updatedAt : Date;
	useCategoryEntries : boolean;
	feedContentTypeHeader : string;

    constructor(data? : KalturaBaseSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSyndicationFeed' },
				id : { type : 's', readOnly : true },
				feedUrl : { type : 's', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				playlistId : { type : 's' },
				name : { type : 's' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaSyndicationFeedStatus, subType : 'KalturaSyndicationFeedStatus' },
				type : { type : 'en', subTypeConstructor : KalturaSyndicationFeedType, subType : 'KalturaSyndicationFeedType' },
				landingPage : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				allowEmbed : { type : 'b' },
				playerUiconfId : { type : 'n' },
				flavorParamId : { type : 'n' },
				transcodeExistingContent : { type : 'b' },
				addToDefaultConversionProfile : { type : 'b' },
				categories : { type : 's' },
				storageId : { type : 'n' },
				entriesOrderBy : { type : 'es', subTypeConstructor : KalturaSyndicationFeedEntriesOrderBy, subType : 'KalturaSyndicationFeedEntriesOrderBy' },
				enforceEntitlement : { type : 'b' },
				privacyContext : { type : 's' },
				updatedAt : { type : 'd', readOnly : true },
				useCategoryEntries : { type : 'b' },
				feedContentTypeHeader : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseSyndicationFeed',KalturaBaseSyndicationFeed);
