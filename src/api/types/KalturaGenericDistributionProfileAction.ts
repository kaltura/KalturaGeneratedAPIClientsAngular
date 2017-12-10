
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGenericDistributionProfileActionArgs  extends KalturaObjectBaseArgs {
    protocol? : KalturaDistributionProtocol;
	serverUrl? : string;
	serverPath? : string;
	username? : string;
	password? : string;
	ftpPassiveMode? : boolean;
	httpFieldName? : string;
	httpFileName? : string;
}


export class KalturaGenericDistributionProfileAction extends KalturaObjectBase {

    protocol : KalturaDistributionProtocol;
	serverUrl : string;
	serverPath : string;
	username : string;
	password : string;
	ftpPassiveMode : boolean;
	httpFieldName : string;
	httpFileName : string;

    constructor(data? : KalturaGenericDistributionProfileActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDistributionProfileAction' },
				protocol : { type : 'en', subTypeConstructor : KalturaDistributionProtocol, subType : 'KalturaDistributionProtocol' },
				serverUrl : { type : 's' },
				serverPath : { type : 's' },
				username : { type : 's' },
				password : { type : 's' },
				ftpPassiveMode : { type : 'b' },
				httpFieldName : { type : 's' },
				httpFileName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericDistributionProfileAction',KalturaGenericDistributionProfileAction);
