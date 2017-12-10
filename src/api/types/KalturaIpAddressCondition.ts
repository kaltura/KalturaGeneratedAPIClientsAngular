
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';

export interface KalturaIpAddressConditionArgs  extends KalturaMatchConditionArgs {
    acceptInternalIps? : boolean;
	httpHeader? : string;
}


export class KalturaIpAddressCondition extends KalturaMatchCondition {

    acceptInternalIps : boolean;
	httpHeader : string;

    constructor(data? : KalturaIpAddressConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIpAddressCondition' },
				acceptInternalIps : { type : 'b' },
				httpHeader : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIpAddressCondition',KalturaIpAddressCondition);
