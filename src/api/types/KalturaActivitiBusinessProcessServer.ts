
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaActivitiBusinessProcessServerProtocol } from './KalturaActivitiBusinessProcessServerProtocol';
import { KalturaBusinessProcessServer, KalturaBusinessProcessServerArgs } from './KalturaBusinessProcessServer';

export interface KalturaActivitiBusinessProcessServerArgs  extends KalturaBusinessProcessServerArgs {
    host? : string;
	port? : number;
	protocol? : KalturaActivitiBusinessProcessServerProtocol;
	username? : string;
	password? : string;
}


export class KalturaActivitiBusinessProcessServer extends KalturaBusinessProcessServer {

    host : string;
	port : number;
	protocol : KalturaActivitiBusinessProcessServerProtocol;
	username : string;
	password : string;

    constructor(data? : KalturaActivitiBusinessProcessServerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaActivitiBusinessProcessServer' },
				host : { type : 's' },
				port : { type : 'n' },
				protocol : { type : 'es', subTypeConstructor : KalturaActivitiBusinessProcessServerProtocol, subType : 'KalturaActivitiBusinessProcessServerProtocol' },
				username : { type : 's' },
				password : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaActivitiBusinessProcessServer',KalturaActivitiBusinessProcessServer);
