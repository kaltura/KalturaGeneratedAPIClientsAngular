
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRelatedFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaRelatedFilter extends KalturaFilter {

    

    constructor(data? : KalturaRelatedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRelatedFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRelatedFilter',KalturaRelatedFilter);
