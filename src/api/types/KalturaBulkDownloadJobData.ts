
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaBulkDownloadJobDataArgs  extends KalturaJobDataArgs {
    entryIds? : string;
	flavorParamsId? : number;
	puserId? : string;
}


export class KalturaBulkDownloadJobData extends KalturaJobData {

    entryIds : string;
	flavorParamsId : number;
	puserId : string;

    constructor(data? : KalturaBulkDownloadJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkDownloadJobData' },
				entryIds : { type : 's' },
				flavorParamsId : { type : 'n' },
				puserId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkDownloadJobData',KalturaBulkDownloadJobData);
