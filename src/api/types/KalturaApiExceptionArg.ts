
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaApiExceptionArgArgs  extends KalturaObjectBaseArgs {
    name? : string;
	value? : string;
}


export class KalturaApiExceptionArg extends KalturaObjectBase {

    name : string;
	value : string;

    constructor(data? : KalturaApiExceptionArgArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApiExceptionArg' },
				name : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaApiExceptionArg',KalturaApiExceptionArg);
