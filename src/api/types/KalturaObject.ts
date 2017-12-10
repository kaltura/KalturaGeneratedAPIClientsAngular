
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaListResponse } from './KalturaListResponse';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaObjectArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaObject extends KalturaObjectBase {

    readonly relatedObjects : { [key : string] : KalturaListResponse};

    constructor(data? : KalturaObjectArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaObject' },
				relatedObjects : { type : 'm', readOnly : true, subTypeConstructor : KalturaListResponse, subType : 'KalturaListResponse' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaObject',KalturaObject);
