
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBaseSyndicationFeedListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaBaseSyndicationFeedListResponse extends KalturaListResponse {

    readonly objects : KalturaBaseSyndicationFeed[];

    constructor(data? : KalturaBaseSyndicationFeedListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSyndicationFeedListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaBaseSyndicationFeed, subType : 'KalturaBaseSyndicationFeed' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseSyndicationFeedListResponse',KalturaBaseSyndicationFeedListResponse);
