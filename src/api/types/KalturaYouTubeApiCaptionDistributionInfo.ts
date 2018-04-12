
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYouTubeApiDistributionCaptionAction } from './KalturaYouTubeApiDistributionCaptionAction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaYouTubeApiCaptionDistributionInfoArgs  extends KalturaObjectBaseArgs {
    language? : string;
	label? : string;
	filePath? : string;
	remoteId? : string;
	action? : KalturaYouTubeApiDistributionCaptionAction;
	version? : string;
	assetId? : string;
}


export class KalturaYouTubeApiCaptionDistributionInfo extends KalturaObjectBase {

    language : string;
	label : string;
	filePath : string;
	remoteId : string;
	action : KalturaYouTubeApiDistributionCaptionAction;
	version : string;
	assetId : string;

    constructor(data? : KalturaYouTubeApiCaptionDistributionInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYouTubeApiCaptionDistributionInfo' },
				language : { type : 's' },
				label : { type : 's' },
				filePath : { type : 's' },
				remoteId : { type : 's' },
				action : { type : 'en', subTypeConstructor : KalturaYouTubeApiDistributionCaptionAction, subType : 'KalturaYouTubeApiDistributionCaptionAction' },
				version : { type : 's' },
				assetId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYouTubeApiCaptionDistributionInfo',KalturaYouTubeApiCaptionDistributionInfo);
