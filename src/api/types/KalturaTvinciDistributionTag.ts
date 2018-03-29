
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTvinciDistributionTagArgs  extends KalturaObjectBaseArgs {
    tagname? : string;
	extension? : string;
	protocol? : string;
	format? : string;
	filename? : string;
	ppvmodule? : string;
}


export class KalturaTvinciDistributionTag extends KalturaObjectBase {

    tagname : string;
	extension : string;
	protocol : string;
	format : string;
	filename : string;
	ppvmodule : string;

    constructor(data? : KalturaTvinciDistributionTagArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvinciDistributionTag' },
				tagname : { type : 's' },
				extension : { type : 's' },
				protocol : { type : 's' },
				format : { type : 's' },
				filename : { type : 's' },
				ppvmodule : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvinciDistributionTag',KalturaTvinciDistributionTag);
