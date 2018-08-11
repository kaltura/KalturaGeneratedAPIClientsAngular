
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSyndicationFeedEntryCountArgs  extends KalturaObjectBaseArgs {
    totalEntryCount? : number;
	actualEntryCount? : number;
	requireTranscodingCount? : number;
}


export class KalturaSyndicationFeedEntryCount extends KalturaObjectBase {

    totalEntryCount : number;
	actualEntryCount : number;
	requireTranscodingCount : number;

    constructor(data? : KalturaSyndicationFeedEntryCountArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSyndicationFeedEntryCount' },
				totalEntryCount : { type : 'n' },
				actualEntryCount : { type : 'n' },
				requireTranscodingCount : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSyndicationFeedEntryCount'] = KalturaSyndicationFeedEntryCount;