
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaServerNode, KalturaMediaServerNodeArgs } from './KalturaMediaServerNode';

export interface KalturaWowzaMediaServerNodeArgs  extends KalturaMediaServerNodeArgs {
    appPrefix? : string;
	transcoder? : string;
	GPUID? : number;
	liveServicePort? : number;
	liveServiceProtocol? : string;
	liveServiceInternalDomain? : string;
}


export class KalturaWowzaMediaServerNode extends KalturaMediaServerNode {

    appPrefix : string;
	transcoder : string;
	GPUID : number;
	liveServicePort : number;
	liveServiceProtocol : string;
	liveServiceInternalDomain : string;

    constructor(data? : KalturaWowzaMediaServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWowzaMediaServerNode' },
				appPrefix : { type : 's' },
				transcoder : { type : 's' },
				GPUID : { type : 'n' },
				liveServicePort : { type : 'n' },
				liveServiceProtocol : { type : 's' },
				liveServiceInternalDomain : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWowzaMediaServerNode',KalturaWowzaMediaServerNode);
