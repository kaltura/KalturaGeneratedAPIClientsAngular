
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaImportJobData, KalturaImportJobDataArgs } from './KalturaImportJobData';

export interface KalturaSshImportJobDataArgs  extends KalturaImportJobDataArgs {
    privateKey? : string;
	publicKey? : string;
	passPhrase? : string;
}


export class KalturaSshImportJobData extends KalturaImportJobData {

    privateKey : string;
	publicKey : string;
	passPhrase : string;

    constructor(data? : KalturaSshImportJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSshImportJobData' },
				privateKey : { type : 's' },
				publicKey : { type : 's' },
				passPhrase : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSshImportJobData',KalturaSshImportJobData);
