
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryServerNode } from './KalturaEntryServerNode';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaEntryServerNodeListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaEntryServerNodeListResponse extends KalturaListResponse {

    readonly objects : KalturaEntryServerNode[];

    constructor(data? : KalturaEntryServerNodeListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaEntryServerNodeListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaEntryServerNode, subType : 'KalturaEntryServerNode' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryServerNodeListResponse',KalturaEntryServerNodeListResponse);
