
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchResult, KalturaESearchResultArgs } from './KalturaESearchResult';

export interface KalturaESearchUserResultArgs  extends KalturaESearchResultArgs {
    
}


export class KalturaESearchUserResult extends KalturaESearchResult {

    

    constructor(data? : KalturaESearchUserResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUserResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchUserResult',KalturaESearchUserResult);
