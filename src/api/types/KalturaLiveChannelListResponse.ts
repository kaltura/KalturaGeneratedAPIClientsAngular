
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveChannel } from './KalturaLiveChannel';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaLiveChannelListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaLiveChannelListResponse extends KalturaListResponse {

    readonly objects : KalturaLiveChannel[];

    constructor(data? : KalturaLiveChannelListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaLiveChannelListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaLiveChannel, subType : 'KalturaLiveChannel' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveChannelListResponse',KalturaLiveChannelListResponse);
