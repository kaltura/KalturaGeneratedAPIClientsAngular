
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSftpDropFolder, KalturaSftpDropFolderArgs } from './KalturaSftpDropFolder';

export interface KalturaTrRdsDropFolderArgs  extends KalturaSftpDropFolderArgs {
    syncMetadataProfile? : number;
	targetMetadataProfile? : number;
}


export class KalturaTrRdsDropFolder extends KalturaSftpDropFolder {

    syncMetadataProfile : number;
	targetMetadataProfile : number;

    constructor(data? : KalturaTrRdsDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTrRdsDropFolder' },
				syncMetadataProfile : { type : 'n' },
				targetMetadataProfile : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTrRdsDropFolder',KalturaTrRdsDropFolder);
