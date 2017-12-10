
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlayReadyRightArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaPlayReadyRight extends KalturaObjectBase {

    

    constructor(data? : KalturaPlayReadyRightArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyRight' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyRight',KalturaPlayReadyRight);
