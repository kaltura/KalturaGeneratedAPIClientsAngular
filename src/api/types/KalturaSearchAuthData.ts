
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchAuthDataArgs  extends KalturaObjectBaseArgs {
    authData? : string;
	loginUrl? : string;
	message? : string;
}


export class KalturaSearchAuthData extends KalturaObjectBase {

    authData : string;
	loginUrl : string;
	message : string;

    constructor(data? : KalturaSearchAuthDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchAuthData' },
				authData : { type : 's' },
				loginUrl : { type : 's' },
				message : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchAuthData',KalturaSearchAuthData);
