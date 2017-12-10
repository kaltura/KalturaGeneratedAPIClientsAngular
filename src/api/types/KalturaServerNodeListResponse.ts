
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaServerNodeListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaServerNodeListResponse extends KalturaListResponse {

    readonly objects : KalturaServerNode[];

    constructor(data? : KalturaServerNodeListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaServerNodeListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaServerNode, subType : 'KalturaServerNode' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaServerNodeListResponse',KalturaServerNodeListResponse);
