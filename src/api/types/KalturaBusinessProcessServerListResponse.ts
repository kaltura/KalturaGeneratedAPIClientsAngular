
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessServer } from './KalturaBusinessProcessServer';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBusinessProcessServerListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaBusinessProcessServerListResponse extends KalturaListResponse {

    readonly objects : KalturaBusinessProcessServer[];

    constructor(data? : KalturaBusinessProcessServerListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaBusinessProcessServerListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaBusinessProcessServer, subType : 'KalturaBusinessProcessServer' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessServerListResponse',KalturaBusinessProcessServerListResponse);
